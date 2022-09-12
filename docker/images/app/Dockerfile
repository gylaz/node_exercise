FROM mhart/alpine-node:16

WORKDIR /home/node

COPY package*.json  ./
RUN npm install --production

COPY . .

CMD ["npm", "start"]
