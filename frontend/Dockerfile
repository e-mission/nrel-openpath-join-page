FROM node:20.7.0-alpine

RUN mkdir -p /public
WORKDIR /public

RUN npm i -g http-server

RUN apk update && apk upgrade busybox

COPY client /public/client
COPY *.html /public/
COPY i18n /public/i18n

EXPOSE 5050
CMD ["http-server", "-p", "5050"]
