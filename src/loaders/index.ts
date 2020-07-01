import apiRouter from '../api';
import buildApp from './app';
import database from './database';
import initSentry from './sentry';

export default async (): Promise<void> => {
  try {
    initSentry();
    await database();

    const app = buildApp({
      prefix: '/sample',
      router: apiRouter,
    });

    app.listen(3000, () => console.log(`App is running on 3000 port`));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
