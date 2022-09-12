# Test Project

ACS Reports Team test project.

## Setup

- Install required engines with `nvm install`.
- Install dependencies with `npm install`
- Run `docker-compose up -d db`. The postgres instance will be attached to port 5400
- Make sure you have the `postgresql` client installed locally by running `which createdb`.
  - You can install `createdb` via `homebrew` by running `brew install libpq`
  or with `apt install postgresql-client` in Windows Linux Subsystems or Debian-like
  installations.
- Run `bin/setup`
- If you are using `docker` you are good to go, otherwise fill out the details for your enviroment.
- Run `npm run debug`

Done!
