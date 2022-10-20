FROM ubuntu:latest

MAINTAINER borncrazy123@123.com

# RUN apt -y update
# RUN apt -y install curl
# RUN apt -y install npm
# RUN npm install -g n
# RUN n 16.18.0

COPY . /poker/app/


WORKDIR /poker

# run npm start
# expose 7001
