FROM weibeld/ubuntu-networking
#FROM ubuntu:20.04
#ADD sources.list /etc/apt/sources.list
ADD share /root
RUN apt-get update
#RUN apt-get upgrade
#RUN export DEBIAN_FRONTEND=noninteractive && \
#    bash -c 'yes | unminimize'
RUN apt-get -y install perl  nginx telnet automake autoconf libtool make openssh-server