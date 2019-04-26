FROM node:alpine

#Create working directory
WORKDIR /usr/src/app

# Copy package/package-lock .json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose app port
EXPOSE 3000

# start application
CMD [ "npm", "start" ]
