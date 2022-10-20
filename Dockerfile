from node:16.18.0-alpine3.15
maintainer sunhengzhe@foxmail.com
copy . /app/
workdir /app
run npm install pm2 -g
expose 8003
cmd ["pm2-runtime", "ecosystem.config.js"]