from ubuntu:latest

maintainer borncrazy123@123.com

run apt-get update
run apt-get -y install curl
run curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
run apt-get install -y nodejs

# copy . /app/
# workdir /app


# run npm start
# expose 7001
