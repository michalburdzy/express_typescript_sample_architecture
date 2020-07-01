import { IAccount } from '../../../../entities/account.entity';

export interface ISerializedAccount {
  userId: string;
  name: string;
  date: string;
  sex: string;
  hasValidatedEmail: boolean;
}

export default (account: IAccount): ISerializedAccount => ({
  userId: account.userId.toString(),
  name: `${account.firstname} ${account.lastname}`,
  date: account.birthDate.toISOString(),
  sex: account.sex,
  hasValidatedEmail: account.emailValidated === 1,
});
