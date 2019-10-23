#Specify a base image
FROM node:10
# Create app directory
RUN mkdir -p /usr/src/app
#Specify a working directory
WORKDIR /usr/src/app

#Copy the dependencies file
COPY package*.json ./

#Install dependencies 
RUN npm install -g nodemon

RUN npm install 


#Copy remaining files
COPY . .

#Default command
CMD ["nodemon","index.js"]