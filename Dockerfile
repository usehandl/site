FROM node:16.15.0

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install -g npm@latest
RUN npm install

# Bundle app source
COPY . .

# Build the packages
RUN npm run build

CMD [ "npm", "start" ]
