import { IAccountRepository } from '../../src/repositories/account.repository';
import { IAccountEntity } from '../../src/entities/account.entity';

export default (entity?: IAccountEntity): IAccountRepository => ({
  getOne: jest.fn().mockResolvedValue(entity),
  getAll: jest.fn().mockResolvedValue([entity]),
});
