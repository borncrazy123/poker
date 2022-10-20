FROM ubuntu:latest

MAINTAINER borncrazy123@123.com

RUN apt -y update
RUN apt -y install curl
RUN apt -y install npm
RUN npm install -g n
RUN n 16.18.0

COPY . /app/

WORKDIR /app

# RUN npm start
EXPOSE 7001

ENTRYPOINT npm start