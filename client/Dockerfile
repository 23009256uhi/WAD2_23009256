# Use Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /client

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the client application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Expose the port on which the React app will run
EXPOSE 3000

# Start the app
CMD ["npm", "start"]