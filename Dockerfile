FROM node:18-alpine as builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application
RUN VITE_WEBHOOK_URL=https://hook.eu2.make.com/jlwmk5crl8yhvtiq2h3pyd6a6aogstwa npm run build

# Use nginx for serving static files
FROM nginx:alpine

# Copy the built app from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
