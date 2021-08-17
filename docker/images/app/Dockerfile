# if updating node version also update 'engines' in package.json
FROM mhart/alpine-node:14

# Skip installing Chrome via Puppeteer NPM package. We'll use the Alpine package.
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

RUN apk add --update-cache --no-cache \
  chromium \
  ghostscript \
  font-noto \
  font-noto-cjk

WORKDIR /home/node

COPY package*.json .npmrc ./
RUN npm install --production

COPY . .

ENTRYPOINT ["bin/entrypoint"]

CMD ["npm", "start"]
