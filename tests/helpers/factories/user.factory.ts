import faker from 'faker';
import { buildFactory } from 'core-package';

import { IUserEntity } from '../../../src/entities/user.entity';

const buildSchema = (): IUserEntity => ({
  id: faker.random.number(),
  name: faker.random.alphaNumeric(10),
  username: faker.random.alphaNumeric(10),
  email: faker.random.alphaNumeric(10),
  password: faker.random.alphaNumeric(10),
  usertype: faker.random.alphaNumeric(10),
  block: faker.random.number(),
  sendEmail: faker.random.number(),
  registerDate: faker.date.past(),
  lastvisitDate: faker.date.past(),
  activation: faker.random.alphaNumeric(10),
  params: faker.random.alphaNumeric(10),
  lastResetTime: faker.date.past(),
  resetCount: faker.random.number(),
});

export default buildFactory<IUserEntity>(buildSchema());
