import nconf from 'nconf';

nconf.env().file({ file: '.env.json' });

