import { buildError, IAppError, HttpStatuses, TranslateFunction } from 'core-package';

import { ErrorCodes } from '../enums/errorCodes.enum';

export default (userId: number, translate: TranslateFunction): IAppError =>
  buildError({
    message: 'account not found',
    publicMessage: translate('accountNotFoundError'),
    code: ErrorCodes.ITEM_NOT_FOUND,
    statusCode: HttpStatuses.NOT_FOUND,
    context: { userId },
  });
