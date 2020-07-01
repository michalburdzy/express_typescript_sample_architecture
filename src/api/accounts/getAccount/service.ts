import { TranslateFunction } from 'core-package';

import { IAccountEntity } from '../../../entities/account.entity';
import { IAccountRepository } from '../../../repositories/account.repository';
import { IUserRepository } from '../../../repositories/user.repository';
import { getAccountNotFoundError } from '../../shared/errors';
import { IUserEntity } from '../../../entities/user.entity';
import tooManyResetsError from '../../shared/errors/tooManyResets.error';

const MAX_ALLOWED_RESETS = 10;

export interface IGetAccountServiceOptions {
  accountId: number;
  accountRepository: IAccountRepository;
  userRepository: IUserRepository;
  translate: TranslateFunction;
}

function isUserAllowed(user?: IUserEntity): boolean {
  return !!user && user.resetCount < MAX_ALLOWED_RESETS;
}

export default async ({
  accountId,
  accountRepository,
  userRepository,
  translate,
}: IGetAccountServiceOptions): Promise<IAccountEntity> => {
  const account = await accountRepository.getOne(accountId);

  if (!account) {
    throw getAccountNotFoundError(accountId, translate);
  }

  const user = await userRepository.getOne(account.userId);

  if (!isUserAllowed(user)) {
    throw tooManyResetsError(translate);
  }

  return account;
};
