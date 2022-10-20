from node:16.18.0-alpine3.15
maintainer borncrazy123@123.com
copy . /app/
workdir /app
npm start
expose 7001