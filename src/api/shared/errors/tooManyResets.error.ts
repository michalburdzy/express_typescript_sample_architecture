import { buildError, IAppError, HttpStatuses, TranslateFunction } from 'core-package';

import { ErrorCodes } from '../enums/errorCodes.enum';

export default (translate: TranslateFunction): IAppError =>
  buildError({
    message: 'Too many resets',
    publicMessage: translate('tooManyResets'),
    code: ErrorCodes.TOO_MANY_RESETS,
    statusCode: HttpStatuses.BAD_REQUEST,
  });
