import { validatorHelper } from 'core-package';
import { getAccountValidator } from '../../../../src/api/accounts/getAccount/validator';

const { isValid, getParsedData } = validatorHelper(getAccountValidator);

describe('getAccount validator', () => {
  it('should validate proper data', () => {
    const validData = {
      params: {
        accountId: '123',
      },
      cookies: {
        sampleCookie: 'cookie',
      },
    };

    expect(isValid(validData)).toBe(true);
    expect(getParsedData(validData)).toEqual({
      params: {
        accountId: 123,
      },
      cookies: {
        sampleCookie: 'cookie',
      },
    });
  });
});
