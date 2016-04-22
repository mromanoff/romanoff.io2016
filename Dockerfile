FROM node:5.10.1

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/

# Install Bower
#RUN npm install -g bower

#RUN npm install

# Bundle app source
#COPY . /usr/src/app

EXPOSE 3000
#CMD [ "npm", "start" ]
