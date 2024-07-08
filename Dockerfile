# command: docker build -t school-management-angular:1.0.0 .

# Nginx -> It's a HTTP and reverse proxy server, a mail proxy server, and a generic TCP/UDP proxy server

# ---------------- Build stage ----------------


# Use the official Node image
FROM node:20 as build

# Set the working directory
WORKDIR /app

# Copy the package.json file
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy everything to work directory
COPY . .

# Build the application
RUN npm run build --prod


# ---------------- Nginx ----------------


# Use the official Nginx image
FROM nginx:alpine

# Copy Nginx configuration file to work directory
COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/dist/school-management-angular/browser /usr/share/nginx/html

# Expose the port 80
EXPOSE 80
