# Test Project

ACS Reports Team test project.

## Setup

- Install required engines with `nvm install`
- Install dependencies with `npm install`
- Run `docker-compose up -d db`
  - Run `docker-compose exec db bin/db-setup`
  - Note, the postgres instance will be attached to port `5400`
- Run `bin/setup` to migrate your databases
  - If you are using `docker` you are good to go, otherwise fill out the details for your enviroment in `.env.json` and run the migrations again
- Run `npm run debug`

Done!
