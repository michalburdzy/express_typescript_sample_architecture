import accountSerializer from '../../../../../src/api/accounts/shared/serializers/account.serializer';
import { accountFactory } from '../../../../helpers/factories/account.factory';

describe('getAccountsList response serializer', () => {
  it('should serialize data', () => {
    const birthDate = new Date();
    const account = accountFactory({
      userId: 123,
      firstname: '>-',
      lastname: '-<',
      birthDate,
      emailValidated: 1,
      sex: 'm',
    });

    const result = accountSerializer(account);

    expect(result).toEqual({
      userId: '123',
      name: '>- -<',
      date: birthDate.toISOString(),
      hasValidatedEmail: true,
      sex: 'm',
    });
  });
});
