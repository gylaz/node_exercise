const nconf = require('nconf');

nconf.env().file({ file: '.env.json' });

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'test_project_dev',
      user: nconf.get('DB_USER'),
      password: nconf.get('DB_PASSWORD'),
      port: nconf.get('DB_PORT')
    },
    migrations: {
      directory: 'db/migrations',
    },
    seeds: {
      directory: 'db/seeds',
    },
  },

  test: {
    client: 'pg',
    connection: {
      database: 'test_project_test',
      user: nconf.get('DB_USER'),
      password: nconf.get('DB_PASSWORD'),
    },
    migrations: {
      directory: 'db/migrations',
    },
    seeds: {
      directory: 'db/seeds',
    },
  },

  production: {
    client: 'pg',
    connection: nconf.get('DATABASE_URL'),
    migrations: {
      directory: 'db/migrations',
    },
    seeds: {
      directory: 'db/seeds',
    },
    pool: { min: 4, max: 20 },
  },
};
