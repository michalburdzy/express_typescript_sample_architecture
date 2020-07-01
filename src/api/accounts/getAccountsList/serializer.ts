import accountSerializer, { ISerializedAccount } from '../shared/serializers/account.serializer';
import { IAccount } from '../../../entities/account.entity';

export default (accounts: IAccount[]): ISerializedAccount[] => accounts.map(accountSerializer);
