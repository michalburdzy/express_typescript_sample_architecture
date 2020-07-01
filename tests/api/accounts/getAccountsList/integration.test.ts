import request from 'supertest';

import { HttpStatuses } from 'core-package';
import buildTestApp from '../../../helpers/testApp.helper';
import testDbManager from '../../../helpers/testDb.helper';
import getAccountsList from '../../../../src/api/accounts/getAccountsList';
import { accountFactory } from '../../../helpers/factories/account.factory';
import { mockRequest } from '../../../helpers/jestTools';

const testApp = buildTestApp(getAccountsList);
const testDb = testDbManager();

describe('getAccountsList route', () => {
  beforeAll(testDb.connect);
  beforeEach(async () => {
    await testDb.clear();
    jest.clearAllMocks();
  });

  afterAll(testDb.disconnect);

  it('should respond with 200 and list of accounts', async () => {
    mockRequest({ id: 123 });

    await testDb.persistAccount(
      accountFactory({
        userId: 123,
        birthDate: new Date(1581433526768),
        firstname: 'A',
        lastname: 'B',
        emailValidated: 1,
        sex: 'm',
      }),
    );

    const { status, body } = await request(testApp).get('/sample/accounts');

    expect(status).toBe(HttpStatuses.OK);
    expect(body).toEqual([
      {
        userId: '123',
        hasValidatedEmail: true,
        name: 'A B',
        sex: 'm',
        date: '2020-02-11T00:00:00.000Z',
      },
    ]);
  });

  it('should respond with 200 and an empty list', async () => {
    const { status, body } = await request(testApp).get('/sample/accounts');
    expect(status).toBe(HttpStatuses.OK);
    expect(body).toEqual([]);
  });

  it('should respond with 404 error when note not found', async () => {
    mockRequest(null);
    const { status, body } = await request(testApp).get('/sample/accounts');

    expect(status).toBe(HttpStatuses.NOT_FOUND);
    expect(body).toEqual({
      code: 'note-not-found',
      message: 'Note not found',
      statusCode: 404,
    });
  });
});
