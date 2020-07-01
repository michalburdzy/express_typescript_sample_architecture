import { buildError, IAppError, HttpStatuses } from 'core-package';

import { ErrorCodes } from '../enums/errorCodes.enum';

const noteNotFoundError = (): IAppError =>
  buildError({
    message: 'Note not found',
    publicMessage: 'Note not found',
    code: ErrorCodes.NOTE_NOT_FOUND,
    statusCode: HttpStatuses.NOT_FOUND,
  });

export { noteNotFoundError };
