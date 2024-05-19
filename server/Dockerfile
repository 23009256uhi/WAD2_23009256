# Use Node.js runtime as the base image
FROM node:16

# Install PostgreSQL client tools
RUN apt-get update && apt-get install -y postgresql-client

# Set the working directory in the container
WORKDIR /app/server

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire source code to the working directory
COPY . .

# Expose the port on which the serever will run 
EXPOSE 8080

# Start the server
CMD ["npm", "start"]