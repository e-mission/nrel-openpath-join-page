FROM node:26.8.1-alpine3.24
LABEL org.opencontainers.image.source=https://github.com/e-mission/nrel-openpath-join-page

RUN mkdir -p /public
WORKDIR /public

RUN npm install -g npm@latest
RUN npm i -g http-server
# Make sure that all vulnerabilities are fixed
RUN npm update -g

COPY client /public/client
COPY *.html /public/
COPY i18n /public/i18n

EXPOSE 5050
CMD ["http-server", "-p", "5050"]
