import request from 'supertest';
import { HttpStatuses } from 'core-package';
import buildTestApp from '../../helpers/testApp.helper';
import statusRouter from '../../../src/api/status';

const testApp = buildTestApp(statusRouter);

describe('status route', () => {
  it('should respond with 200 status code', async () => {
    const { status } = await request(testApp).get('/sample/status/healthcheck');
    expect(status).toBe(HttpStatuses.OK);
  });
});
