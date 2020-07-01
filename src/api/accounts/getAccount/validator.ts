import { buildValidationMiddleware, validator } from 'core-package';

export interface IGetAccountRequest {
  params: {
    accountId: number;
  };
  cookies: {
    sampleCookie: string;
  };
}

export const getAccountValidator = {
  params: validator.object({
    accountId: validator.number().required(),
  }),
  cookies: validator
    .object({
      sampleCookie: validator.string(),
    })
    .unknown(true),
};

export default buildValidationMiddleware(getAccountValidator);
