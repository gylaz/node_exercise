# if updating node version also update 'engines' in package.json
FROM mhart/alpine-node:14

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

RUN apk add --update-cache --no-cache postgresql-client

WORKDIR /home/node

COPY package*.json ./
RUN npm install

COPY .env.sample .env.json
COPY . .

ENTRYPOINT ["bin/entrypoint-ci"]

CMD ["bin/ci"]
