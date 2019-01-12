FROM node:10.7

COPY . /src
WORKDIR /src

RUN npm install && npm run build

ENV HOST 0.0.0.0
