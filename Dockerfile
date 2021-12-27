FROM node:17-alpine3.12

WORKDIR /home/mario/projects/current/unagibot

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN apk add --update chromium
RUN npm install

COPY . .

CMD [ "node", "src/server.js" ]
