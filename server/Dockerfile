# Use the official Node.js image as base
FROM node:latest

# Install PostgreSQL client tools
RUN apt-get update && apt-get install -y postgresql-client

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Generate Prisma client
RUN npx prisma generate --schema=./src/adapter/database/prisma/schema.prisma

# Build the TypeScript code
RUN npm run build

# Expose the port the app runs on
EXPOSE 5173

# Command to run the application
CMD ["node", "dist/adapter/api/server.js"]