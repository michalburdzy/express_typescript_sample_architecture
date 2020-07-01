import { RequesterMethods } from 'core-package';

import service from '../../../../src/api/accounts/getAccountsList/service';
import accountRepositoryMock from '../../../mocks/accounts.repository.mock';
import { accountEntityFactory } from '../../../helpers/factories/account.factory';
import requesterMock from '../../../mocks/requester.mock';

describe('getAccountsList service', () => {
  it('should return entities list', async () => {
    const account = accountEntityFactory();
    const accountRepository = accountRepositoryMock(account);
    const requester = requesterMock({ id: 123 });
    const result = await service({ accountRepository, requester });

    expect(result).toEqual([account]);
    expect(requester).toBeCalledWith({
      method: RequesterMethods.GET,
      url: 'https://jsonplaceholder.typicode.com/todos/1',
    });
  });
});
