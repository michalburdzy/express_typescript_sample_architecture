import { Request, Response, NextFunction } from 'express';
import { getCustomRepository } from 'typeorm';
import { HttpStatuses, requester } from 'core-package';

import { AccountRepository } from '../../../repositories';
import service from './service';
import serializer from './serializer';

export default async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response | void> => {
  try {
    const results = await service({
      accountRepository: getCustomRepository(AccountRepository),
      requester,
    });

    const response = serializer(results);

    return res
      .cookie('sampleCookie', 'sampleCookie')
      .send(response)
      .status(HttpStatuses.OK);
  } catch (error) {
    return next(error);
  }
};
