# Build Stage
# Use Node 18 for stability with Expo 54
FROM node:18-alpine AS builder

LABEL maintainer="HomeCart Admin"
LABEL description="Build stage for HomeCart Mobile-Web Application"

WORKDIR /app

# Install dependencies - done separately for layer caching
COPY package*.json ./
RUN npm install

# Copy source and build static web files
COPY . .
RUN npx expo export -p web

# Serve Stage
# Using Nginx to serve the static bundle efficiently
FROM nginx:alpine

LABEL version="1.0.0"
LABEL service="homecart-web"

# Copy build files from the builder stage to Nginx html directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
