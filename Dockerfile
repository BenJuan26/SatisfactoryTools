FROM node:16-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

FROM nginx

COPY --from=builder /app/www /usr/share/nginx/html