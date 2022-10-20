from ubuntu:latest

MAINTAINER borncrazy123@123.com

run apt -y update
run apt -y install curl
run apt -y install npm
run npm install -g n
run n 16.18.0

workdir /poker
copy . /app/



# run npm start
# expose 7001
