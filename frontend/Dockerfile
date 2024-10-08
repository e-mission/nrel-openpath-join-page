FROM node:21.7.2-alpine
LABEL org.opencontainers.image.source=https://github.com/e-mission/nrel-openpath-join-page

RUN mkdir -p /public
WORKDIR /public

RUN npm i -g http-server

COPY client /public/client
COPY *.html /public/
COPY i18n /public/i18n

EXPOSE 5050
CMD ["http-server", "-p", "5050"]
