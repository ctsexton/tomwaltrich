FROM node:10.7

COPY . /src
WORKDIR /src

RUN npm install --production && npm run build:server

EXPOSE 3000
