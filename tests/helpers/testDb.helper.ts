import { Connection } from 'typeorm';

import buildDb from '../../src/loaders/database';
import AccountEntity, { IAccount } from '../../src/entities/account.entity';
import UserEntity, { IUserEntity } from '../../src/entities/user.entity';

export interface ITestDbManager {
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
  clear: () => Promise<void>;
  persistAccount: (args: Partial<IAccount>) => Promise<Partial<IAccount>>;
  persistUser: (args: Partial<IUserEntity>) => Promise<Partial<IUserEntity>>;
}

export default (): ITestDbManager => {
  let connection: Connection;

  return {
    connect: async (): Promise<void> => {
      connection = await buildDb();
    },
    disconnect: async (): Promise<void> => {
      await connection.close();
    },
    clear: async (): Promise<void> => {
      await Promise.all([
        connection.manager.clear(AccountEntity),
        connection.manager.clear(UserEntity),
      ]);
    },
    persistAccount: async (args: Partial<IAccount>): Promise<Partial<IAccount>> =>
      connection.manager.save(AccountEntity, args),
    persistUser: async (args: Partial<IUserEntity>): Promise<Partial<IUserEntity>> =>
      connection.manager.save(UserEntity, args),
  };
};
