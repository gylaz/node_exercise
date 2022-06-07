# Test Project

ACS Reports Team test project.

## Setup

- Install required engines with `nvm install`.
- Install dependencies with `npm install`
- Run `docker-compose up -d db`. The postgres instance will be attached to port 5400
- Run `bin/setup`
- Copy the `.env.sample` file into a new `.env.json` file. If you are using `docker` 
you are good to go, otherwise fill out the details for your enviroment.
- Run `npm run debug` 

Done!
