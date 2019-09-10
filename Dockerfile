FROM node:lts-alpine AS build

RUN apk add --no-cache --virtual .gyp python make g++ autoconf automake libtool file pkgconfig nasm

WORKDIR /app
ENV NODE_ENV=production

COPY . .
RUN npm install --production && \
  npm run build

FROM nginx:alpine

COPY --from=build --chown=nginx:nginx /app/public /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./site.conf /etc/nginx/conf.d/default.conf
RUN touch /var/run/nginx.pid && \
  chown nginx:nginx /var/run/nginx.pid && \
  chown nginx:nginx /var/cache/nginx

USER nginx
EXPOSE 8080
