FROM node:4.4.3

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
ONBUILD COPY *.json /usr/src/app/
ONBUILD RUN npm install
ONBUILD COPY . /usr/src/app

# Install Bower
#RUN npm install -g bower

#RUN npm install

# Bundle app source
#COPY . /usr/src/app

EXPOSE 3000
CMD [ "npm", "start" ]

