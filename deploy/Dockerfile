FROM node:lts-alpine AS build

RUN apk add --no-cache --virtual .gyp python3 make g++ autoconf automake libtool file pkgconfig nasm util-linux

WORKDIR /app
ENV NODE_ENV=production

COPY . .
RUN npm install --production && \
  npm run build

FROM nginx:alpine

RUN apk --update --no-cache upgrade

COPY --from=build --chown=nginx:nginx /app/public /usr/share/nginx/html

COPY deploy/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
