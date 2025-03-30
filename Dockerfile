# Build stage for frontend
FROM node:20-alpine AS frontend-build
WORKDIR /app
COPY client/package*.json ./
RUN npm install
COPY client/ .
RUN npm run build

# Build stage for backend
FROM node:20-alpine AS backend-build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY server/ ./server/
RUN npm run backend:build

# Production stage
FROM node:20-alpine
WORKDIR /app

# Install wget for health checks
RUN apk add --no-cache wget

# Copy backend files
COPY --from=backend-build /app/dist ./dist
COPY --from=backend-build /app/package*.json ./
COPY --from=backend-build /app/node_modules ./node_modules

# Copy frontend files
COPY --from=frontend-build /app/dist ./client/dist

# Set environment variables
ENV NODE_ENV=production

# Expose the port the app runs on
EXPOSE 5000

# Start the application
CMD ["npm", "run", "backend:start"] 