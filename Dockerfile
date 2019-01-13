FROM node:10.7

COPY . /src
WORKDIR /src

RUN npm install && npm run build:server

ENV HOST 0.0.0.0
