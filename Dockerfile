# Build Stage
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source and build web
COPY . .
RUN npx expo export -p web

# Serve Stage
FROM nginx:alpine

# Copy build files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Default port for Cloud Run is 8080, but Nginx is 80. 
# We'll use 80 and let GCP handle the routing or configure Nginx for 8080.
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
