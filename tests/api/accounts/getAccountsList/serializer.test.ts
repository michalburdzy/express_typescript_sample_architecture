import serializer from '../../../../src/api/accounts/getAccountsList/serializer';
import { accountFactory } from '../../../helpers/factories/account.factory';

describe('getAccountsList response serializer', () => {
  it('should serializes data', () => {
    const birthDate = new Date();
    const account = accountFactory({
      userId: 123,
      firstname: 'e1',
      lastname: '1e',
      birthDate,
      sex: 'm',
      emailValidated: 0,
    });

    const result = serializer([account]);

    expect(result).toEqual([
      {
        userId: '123',
        name: 'e1 1e',
        sex: 'm',
        hasValidatedEmail: false,
        date: birthDate.toISOString(),
      },
    ]);
  });
});
