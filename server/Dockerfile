# # Use an official Node.js runtime as the base image
# FROM node:14

# # Set the working directory in the container
# WORKDIR /server

# # Install PostgreSQL client
# RUN apt-get update && apt-get install -y postgresql-client

# # Copy package.json and package-lock.json to the working directory
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the server application code to the working directory
# COPY . .

# # Set the required environment variables for PostgreSQL
# # ENV POSTGRES_USER=postgres
# # ENV POSTGRES_PASSWORD=postgres
# # ENV POSTGRES_DB=testdb

# # Specify the command to run the API server
# CMD ["npm", "start"]

# # Expose the port on which the API server will run
# EXPOSE 8080

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

# Copy the entire API source code to the working directory
COPY . .

# Expose the port on which the API will run 
EXPOSE 8080

# Start the API
CMD ["npm", "start"]