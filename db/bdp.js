import nconf from 'nconf';
import knex from 'knex';
import { types } from 'pg';

const config = {
  client: 'pg',
  connection: nconf.get('BDP_URL'),
  pool: { min: 4, max: 20 },
};

types.setTypeParser(types.builtins.NUMERIC, parseFloat);
const env = nconf.get('NODE_ENV') || 'development';
const bdp = knex(config);

if (env !== 'test') {
  bdp.on('query', ({ sql, bindings }) => {
    const oneLineSql = sql.replace(/\n/g, ' ');

    if (!sql.includes('dbIsUp')) {
      logger.info({ sql: oneLineSql, bindings });
    }
  });

  bdp.on('query-error', (error) => {
    logger.error(error);
  });
}

export default bdp;
