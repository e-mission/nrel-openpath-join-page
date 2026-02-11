FROM node:25.6.0-alpine3.23

RUN mkdir -p /public
WORKDIR /public

RUN npm install -g npm@latest
RUN npm i -g http-server

COPY client /public/client
COPY *.html /public/
COPY i18n /public/i18n

EXPOSE 5050
CMD ["http-server", "-p", "5050"]
