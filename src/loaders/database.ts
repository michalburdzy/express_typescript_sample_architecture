import path from 'path';
import { createConnection, Connection } from 'typeorm';
import config from './config';

export default (): Promise<Connection> => {
  return createConnection({
    type: 'mysql',
    host: config.DB_HOST,
    port: config.DB_PORT,
    username: config.DB_USERNAME,
    password: config.DB_PASSWORD,
    database: config.DB_DATABASE,
    entities: [
      path.join(__dirname, '..', 'entities', '**', '*.js'),
      path.join(__dirname, '..', 'entities', '**', '*.ts'),
    ],
    logging: config.DB_LOGGING,
    synchronize: false,
  });
};
