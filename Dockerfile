FROM node:lts-alpine3.11 as builder
ARG NPM_TOKEN
WORKDIR /usr/src
COPY . .
RUN yarn
RUN yarn run build

FROM node:lts-alpine3.11
RUN apk add --no-cache py2-pip \
    && pip install awscli
WORKDIR /usr/app
RUN yarn global add pm2 typescript
COPY --from=builder /usr/src/package.json package.json
COPY --from=builder /usr/src/node_modules node_modules
COPY --from=builder /usr/src/healthcheck.js healthcheck.js
COPY --from=builder /usr/src/secrets-entrypoint.sh secrets-entrypoint.sh
COPY --from=builder /usr/src/dist/ ./

RUN chown -R node:node /usr/app

USER node

ENTRYPOINT ["/usr/app/secrets-entrypoint.sh"]
CMD ["pm2-runtime","src/index.js"]
HEALTHCHECK --interval=10s --timeout=5s --start-period=10s --retries=3 CMD node /usr/app/healthcheck.js
EXPOSE 3000
