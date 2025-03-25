# Stage 1: Build the backend
FROM node:20-alpine AS backend-builder

WORKDIR /app

COPY ./backend/package*.json ./backend/
RUN cd backend && npm ci

COPY ./backend ./backend
COPY ./core ./core

WORKDIR /app/backend

RUN npx prisma generate && npm run start:dev

# Stage 2: Build the frontend
FROM node:18-alpine AS frontend-builder

WORKDIR /app

COPY ./frontend/package*.json ./
RUN npm ci

COPY ./frontend ./
COPY ./core ./core

# Set environment variables for the build
ENV NEXT_PUBLIC_API_URL=http://localhost:4000

# Build the Next.js application
RUN npm run build

# Stage 3: Run the frontend
FROM node:18-alpine

WORKDIR /app

COPY --from=frontend-builder /app ./

EXPOSE 3000

CMD ["npm", "start"]