from ubuntu:latest

MAINTAINER borncrazy123@123.com

run apt -y update
run apt -y install curl
# run curl -sL https://deb.nodesource.com/setup_16.x
# run apt install -y nodejs

run apt install -y npm
run npm install -g n
run n 16.18.0

copy . /poker/
workdir /poker


# run npm start
# expose 7001
