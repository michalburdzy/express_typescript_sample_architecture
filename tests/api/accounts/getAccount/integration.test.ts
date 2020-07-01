import request from 'supertest';
import { HttpStatuses } from 'core-package';

import buildTestApp from '../../../helpers/testApp.helper';
import testDbManager from '../../../helpers/testDb.helper';
import getAccount from '../../../../src/api/accounts/getAccount';
import { accountFactory } from '../../../helpers/factories/account.factory';
import jwtMock from '../../../mocks/jwt.mock';
import userFactory from '../../../helpers/factories/user.factory';

const testApp = buildTestApp(getAccount);
const testDb = testDbManager();

describe('getAccount route', () => {
  beforeAll(testDb.connect);
  beforeEach(testDb.clear);
  afterAll(testDb.disconnect);

  it('should respond with 200 and account found by its id', async () => {
    const cookie = 'I_LIKE_COOKIES';
    await testDb.persistAccount(
      accountFactory({
        userId: 123,
        birthDate: new Date(1581433526768),
        firstname: 'A',
        lastname: 'B',
        sex: 'm',
        emailValidated: 1,
      }),
    );

    await testDb.persistUser(userFactory({ id: 123, resetCount: 0 }));

    const { status, body, header } = await request(testApp)
      .get('/sample/accounts/123')
      .set('Authorization', jwtMock())
      .set('Cookie', [`sampleCookie=${cookie}`]);

    const cookieHeader = header['set-cookie'][0].split(';')[0] ?? null;

    expect(status).toBe(HttpStatuses.OK);
    expect(body).toEqual({
      userId: '123',
      name: 'A B',
      date: '2020-02-11T00:00:00.000Z',
      hasValidatedEmail: true,
      sex: 'm',
      additionalField: 'omelette du fromage',
    });
    expect(cookieHeader).toBe(`sampleCookie=${cookie}`);
  });

  it('should respond with 404 error if account not found', async () => {
    const { status, body } = await request(testApp)
      .get('/sample/accounts/123')
      .set('Authorization', jwtMock());

    expect(status).toBe(HttpStatuses.NOT_FOUND);
    expect(body).toEqual({
      code: 'account-not-found',
      context: { userId: 123 },
      message: 'Account not found',
      statusCode: 404,
    });
  });

  it('should respond with 401 status code when unauthorized', async () => {
    const { status, body } = await request(testApp).get('/sample/accounts/123');

    expect(status).toBe(HttpStatuses.UNAUTHORIZED);
    expect(body.message).toBe('Missing JWT token.');
    expect(body.code).toBe('jwt-missing');
    expect(body.statusCode).toBe(401);
  });

  it('should respond with 401 status code when token is invalid ', async () => {
    const { status, body } = await request(testApp)
      .get('/sample/accounts/123')
      .set('Authorization', 'Bearer ' + 'invalidtoken');

    expect(status).toBe(HttpStatuses.UNAUTHORIZED);
    expect(body.message).toBe('Invalid JWT token format.');
    expect(body.code).toBe('invalid-jwt-format');
    expect(body.statusCode).toBe(401);
  });
});
