import * as requester from 'core-package/lib/src/requester';

export function mockRequest(response: any): jest.SpyInstance {
  return jest.spyOn(requester, 'requester').mockResolvedValue(response);
}
