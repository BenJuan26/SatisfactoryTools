FROM node:16-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

FROM ghcr.io/benjuan26/restful-storage:latest

COPY --from=builder /app/www /www