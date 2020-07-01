import { Requester, RequesterMethods } from 'core-package';

import { IAccountEntity } from '../../../entities/account.entity';
import { IAccountRepository } from '../../../repositories/account.repository';
import { noteNotFoundError } from '../../shared/errors/noteNotFound.error';

export interface IGetAccountsListServiceOptions {
  accountRepository: IAccountRepository;
  requester: Requester;
}

export interface INote {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

/**
 * Makes call to https://jsonplaceholder.typicode.com for some example data
 */
function getNote(requester: Requester, id: number): Promise<INote> {
  return requester({
    method: RequesterMethods.GET,
    url: `https://jsonplaceholder.typicode.com/todos/${id}`,
  });
}

export default async ({
  accountRepository,
  requester,
}: IGetAccountsListServiceOptions): Promise<IAccountEntity[]> => {
  const note = await getNote(requester, 1);

  if (!note) {
    throw noteNotFoundError();
  }

  return accountRepository.getAll();
};
