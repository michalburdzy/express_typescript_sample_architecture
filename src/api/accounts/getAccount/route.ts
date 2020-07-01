import { NextFunction, Response } from 'express';
import { HttpStatuses, ValidatedRequest } from 'core-package';

import { getCustomRepository } from 'typeorm';
import { AccountRepository, UserRepository } from '../../../repositories';
import service from './service';
import serializer from './serializer';
import { IGetAccountRequest } from './validator';

type GetAccountRequest = ValidatedRequest<IGetAccountRequest>;

export default async (
  req: GetAccountRequest,
  res: Response,
  next: NextFunction,
): Promise<Response | void> => {
  try {
    const { accountId } = req.params;
    const { translate, cookies } = req;

    const result = await service({
      accountId,
      accountRepository: getCustomRepository(AccountRepository),
      userRepository: getCustomRepository(UserRepository),
      translate,
    });

    const response = serializer(result);

    return res
      .cookie('sampleCookie', cookies?.sampleCookie)
      .send(response)
      .status(HttpStatuses.OK);
  } catch (error) {
    return next(error);
  }
};
