import faker from 'faker';
import { buildFactory } from 'core-package';

import { IAccount, IAccountEntity } from '../../../src/entities/account.entity';
import userFactory from './user.factory';

const buildSchema = (): IAccount => ({
  userId: faker.random.number(),
  firstname: faker.random.alphaNumeric(10),
  lastname: faker.random.alphaNumeric(10),
  birthDate: faker.date.past(),
  sex: faker.random.alphaNumeric(),
  emailValidated: 1,
  cgu: faker.date.future(),
  newsletter: 1,
  newsletterPartners: 1,
  referrer: faker.random.alphaNumeric(10),
  source: faker.random.alphaNumeric(10),
  data: faker.lorem.paragraph(),
});

export const accountFactory = buildFactory<IAccount>(buildSchema());

export const accountEntityFactory = buildFactory<IAccountEntity>({
  ...buildSchema(),
  user: userFactory(),
});
