import serializer from '../../../../src/api/accounts/getAccount/serializer';
import { accountFactory } from '../../../helpers/factories/account.factory';

describe('getAccountsList response serializer', () => {
  it('should serialize data', () => {
    const birthDate = new Date();
    const account = accountFactory({
      userId: 123,
      firstname: 'abc',
      lastname: 'cba',
      birthDate,
      sex: 'f',
      emailValidated: 0,
    });

    const result = serializer(account);

    expect(result).toEqual({
      userId: '123',
      name: 'abc cba',
      date: birthDate.toISOString(),
      additionalField: 'omelette du fromage',
      hasValidatedEmail: false,
      sex: 'f',
    });
  });
});
