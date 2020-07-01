import accountSerializer, { ISerializedAccount } from '../shared/serializers/account.serializer';
import { IAccount } from '../../../entities/account.entity';

export interface IGetAccountResponse extends ISerializedAccount {
  additionalField: string;
}

export default (account: IAccount): IGetAccountResponse => ({
  ...accountSerializer(account),
  additionalField: 'omelette du fromage',
});
