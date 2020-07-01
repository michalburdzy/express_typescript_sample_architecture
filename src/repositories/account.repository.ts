import { EntityRepository, Repository } from 'typeorm';
import AccountEntity, { IAccountEntity } from '../entities/account.entity';
import AccountQueryBuilder from './queryBuilders/account.queryBuilder';

export interface IAccountRepository {
  getOne: (id: number) => Promise<IAccountEntity | undefined>;
  getAll: () => Promise<IAccountEntity[]>;
}

@EntityRepository(AccountEntity)
export default class AccountRepository extends Repository<AccountEntity>
  implements IAccountRepository {
  private accountQueryBuilder(): AccountQueryBuilder {
    return new AccountQueryBuilder(this.createQueryBuilder('account'));
  }

  getOne(id: number): Promise<IAccountEntity | undefined> {
    return this.accountQueryBuilder()
      .whereId(id)
      .getOne();
  }

  getAll(): Promise<IAccountEntity[]> {
    return this.accountQueryBuilder().getMany();
  }
}
