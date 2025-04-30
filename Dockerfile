# Build Stage
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


# Production Stage
FROM nginx
# Copy the built files from the build stage
COPY --from=build /app/build /usr/share/nginx/html
# Expose port 3000 and map it to container port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

