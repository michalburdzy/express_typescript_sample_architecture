import { EntityRepository, Repository } from 'typeorm';
import UserEntity, { IUserEntity } from '../entities/user.entity';

export interface IUserRepository {
  getOne: (id: number) => Promise<IUserEntity | undefined>;
  getAll: () => Promise<IUserEntity[]>;
}

@EntityRepository(UserEntity)
export default class UserRepository extends Repository<UserEntity> implements IUserRepository {
  async getOne(id: number): Promise<IUserEntity | undefined> {
    return this.createQueryBuilder('user')
      .where('user.id = :id', { id })
      .getOne();
  }

  async getAll(): Promise<IUserEntity[]> {
    return this.createQueryBuilder('user').getMany();
  }
}
