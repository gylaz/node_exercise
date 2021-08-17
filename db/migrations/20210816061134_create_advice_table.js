exports.up = (knex) => {
  return knex.schema.createTable('advices', (t) => {
    t.increments('id').primary();
    t.integer('api_id').notNullable();
    t.string('advice').notNullable();
    t.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    t.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('advice');
};
