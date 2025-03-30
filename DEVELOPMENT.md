# Development Guide

This guide provides comprehensive instructions for setting up and running the project in a development environment.

## Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/ysskrishna/express-react-helmet-seo-demo.git
cd express-react-helmet-seo-demo
```

2. Install all dependencies (both frontend and backend):
```bash
npm run install-all
```

3. Start development servers:
```bash
npm run dev
```

The development environment will start with:
- Frontend server at http://localhost:5173
- Backend server at http://localhost:5000
- Hot reloading enabled for both servers

4. Starting production:
```bash
npm run build
npm run start
```

The production environment will start with:
- Single server for frontend + backend at http://localhost:5000

## Available Scripts

### Development
- `npm run dev` - Start both frontend and backend development servers concurrently
- `npm run backend:dev` - Start backend development server with hot-reloading (tsx watch)
- `npm run client:dev` - Start frontend development server (Vite)

### Build
- `npm run build` - Clean and build both frontend and backend for production
- `npm run client:build` - Build frontend only (Vite build)
- `npm run backend:build` - Build backend only (esbuild)
  - Bundles TypeScript
  - Handles external dependencies
  - Copies JSON files
  - Generates ESM output

### Production
- `npm run start` - Run backend `dist` folder and `client/dist` folder in a single server
- `npm run backend:start` - Start backend in production mode by running the backend `dist` folder

### Utility
- `npm run clean` - Clean build directories for both frontend and backend
- `npm run install-all` - Install dependencies for both frontend and backend 