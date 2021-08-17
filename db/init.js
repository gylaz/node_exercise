import knex from 'knex';
import { Model, knexSnakeCaseMappers } from 'objection';
import nconf from 'nconf';

import knexConfig from '../knexfile';

const env = nconf.get('NODE_ENV') || 'development';
const db = knex({ ...knexConfig[env], ...knexSnakeCaseMappers() });

Model.knex(db);

export default db;
