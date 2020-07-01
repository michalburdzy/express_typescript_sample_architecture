import { SelectQueryBuilder } from 'typeorm';
import VideoEntity from '../../entities/account.entity';

export default class AccountsQueryBuilder extends SelectQueryBuilder<VideoEntity> {
  public selectWithUser(): this {
    return this.leftJoinAndSelect('account.user', 'user');
  }

  public whereId(id: number): this {
    return this.where('account.user_id = :id', { id });
  }
}
