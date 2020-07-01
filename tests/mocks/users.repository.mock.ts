import { IUserRepository } from '../../src/repositories/user.repository';
import { IUserEntity } from '../../src/entities/user.entity';

export default (entity?: IUserEntity): IUserRepository => ({
  getOne: jest.fn().mockResolvedValue(entity),
  getAll: jest.fn().mockResolvedValue([entity]),
});
