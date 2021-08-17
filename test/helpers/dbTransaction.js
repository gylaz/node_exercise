import { Model } from 'objection';

const knex = Model.knex();
let trx;

beforeEach(async () => {
  trx = await Model.startTransaction(knex);
  Model.knex(trx);
});

afterEach(async () => {
  await trx.rollback();
});

afterAll(async () => {
  await knex.destroy();
});
