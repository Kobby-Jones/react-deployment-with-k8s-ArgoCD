FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .

RUN npm run build

# Start with NGINX
FROM nginx
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose port 3000 and map it to container port 80
EXPOSE 3000:80

# Start nginx
CMD ["nginx", "-g" "daemon off;"]

