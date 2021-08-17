# if updating node version also update 'engines' in package.json
FROM mhart/alpine-node:14

WORKDIR /home/node

COPY .npmrc .

RUN npm install nconf jest supertest jest-json-schema @babel/core @babel/plugin-transform-modules-commonjs

COPY package.json .
COPY test/helpers test/helpers
COPY test/smoke test/smoke
COPY test/smoke/.babelrc.json test/
COPY docker/images/CD/test.sh .

CMD ["./test.sh"]
