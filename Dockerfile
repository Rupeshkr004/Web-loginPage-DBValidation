FROM ubuntu

WORKDIR /nodeServer
COPY . /nodeServer
# Install curl
RUN apt-get update && apt-get install -y curl

# Install NVM
RUN apt-get update && apt-get install -y curl

# Install NVM
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash
RUN apt install -y nodejs
#RUN npm install -g npm@latest
# Verify Node.js installation
RUN node -v
RUN npm -v
#RUN apt-get install -y build-essential
# Install Node.js packages
RUN npm install express mssql
CMD ["node", "server.js"]
