/* eslint-disable @typescript-eslint/no-explicit-any */
import { Requester } from 'core-package';

export default (result: any): Requester => jest.fn().mockResolvedValue(result);
