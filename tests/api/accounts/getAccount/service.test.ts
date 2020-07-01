import { HttpStatuses } from 'core-package';

import service from '../../../../src/api/accounts/getAccount/service';
import accountRepositoryMock from '../../../mocks/accounts.repository.mock';
import { accountEntityFactory } from '../../../helpers/factories/account.factory';
import { ErrorCodes } from '../../../../src/api/shared/enums/errorCodes.enum';
import translateMock from '../../../mocks/translate.mock';
import userRepositoryMock from '../../../mocks/users.repository.mock';
import userFactory from '../../../helpers/factories/user.factory';

describe('getAccount service', () => {
  it('should return account entity by id', async () => {
    const id = 123;
    const account = accountEntityFactory({ userId: id });
    const user = userFactory({ id, resetCount: 0 });

    const accountRepository = accountRepositoryMock(account);
    const userRepository = userRepositoryMock(user);

    const result = await service({
      accountId: id,
      accountRepository,
      userRepository,
      translate: translateMock,
    });

    expect(result).toBe(account);
  });

  it('should throw 404 error if account not found', async () => {
    const accountRepository = accountRepositoryMock();
    const userRepository = userRepositoryMock();
    expect.assertions(2);

    try {
      await service({
        accountId: 123,
        accountRepository,
        userRepository,
        translate: translateMock,
      });
    } catch (error) {
      expect(error.statusCode).toBe(HttpStatuses.NOT_FOUND);
      expect(error.code).toBe(ErrorCodes.ITEM_NOT_FOUND);
    }
  });

  it('should throw 400 error if to many resets', async () => {
    const id = 123;
    const account = accountEntityFactory({ userId: id });
    const user = userFactory({ id, resetCount: 11 });

    const accountRepository = accountRepositoryMock(account);
    const userRepository = userRepositoryMock(user);
    expect.assertions(2);

    try {
      await service({
        accountId: 123,
        accountRepository,
        userRepository,
        translate: translateMock,
      });
    } catch (error) {
      expect(error.statusCode).toBe(HttpStatuses.BAD_REQUEST);
      expect(error.code).toBe(ErrorCodes.TOO_MANY_RESETS);
    }
  });
});
