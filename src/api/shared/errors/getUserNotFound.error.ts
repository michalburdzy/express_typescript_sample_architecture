import { buildError, IAppError, HttpStatuses, TranslateFunction } from 'core-package';

import { ErrorCodes } from '../enums/errorCodes.enum';

export default (userId: number, translate: TranslateFunction): IAppError =>
  buildError({
    message: 'User not found',
    publicMessage: translate('userNotFoundError'),
    code: ErrorCodes.USER_NOT_FOUND,
    statusCode: HttpStatuses.NOT_FOUND,
    context: { userId },
  });
