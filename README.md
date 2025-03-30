# Express React Typescript SEO Starter

A full-stack TypeScript application demonstrating advanced SEO optimization using React-Helmet-Async at the page level with an Express.js backend and React Frontend. This project showcases modern development practices including optimized production builds with esbuild, TailwindCSS for styling, and TypeScript integration throughout the stack.


## Features

- 🚀 Full-stack TypeScript setup with hot-reloading
- ⚛️ React with Vite for lightning-fast development
- 🎯 Page-level SEO management using React Helmet Async
- 🔧 Express.js backend with TypeScript and esbuild
- 📦 LowDB for lightweight JSON-based data persistence
- 🎨 TailwindCSS for modern, utility-first styling
- 🔄 Concurrent development servers with hot-reload
- 📝 ESLint for code quality
- 🌍 Environment variable support with dotenv
- 🏗️ Production-ready build setup with optimized bundling
- 💪 Strong typing for API endpoints and responses
- 🔒 CORS configuration for secure cross-origin requests
- 🏷️ Dynamic meta tags and title updates
- 📱 Mobile responsive layout

For detailed SEO implementation guidelines, check out our [SEO Documentation](SEO.md).

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
- Frontend server at `http://localhost:5173`
- Backend server at `http://localhost:5000`
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

## Project Structure

```
react-helmet-seo-demo/
├── client/                  # Frontend React application
│   ├── src/                 # Source folder
│   │   ├── api/             # API integration and services
│   │   ├── components/      # Reusable React components
│   │   ├── pages/           # Page components with SEO
│   │   ├── types/           # TypeScript type definitions
│   │   ├── App.tsx          # Root App component
│   │   ├── App.css          # App-specific styles
│   │   ├── main.tsx         # Application entry point
│   │   ├── index.css        # Global styles
│   │   └── vite-env.d.ts    # Vite environment types
│   ├── public/              # Static assets
│   ├── dist/                # Frontend Build output
│   ├── index.html           # Entry HTML file
│   ├── vite.config.ts       # Vite configuration
│   ├── tailwind.config.js   # Tailwind CSS configuration
│   ├── postcss.config.js    # PostCSS configuration
│   ├── eslint.config.js     # ESLint configuration
│   ├── tsconfig.json        # TypeScript base configuration
│   ├── tsconfig.app.json    # TypeScript app configuration
│   ├── tsconfig.node.json   # TypeScript Node configuration
│   └── package.json         # Frontend dependencies
├── server/                  # Backend Express application
│   ├── core/                # Core server functionality
│   ├── routers/             # API routes
│   ├── services/            # Business logic services
│   ├── types.ts             # TypeScript type definitions
│   └── index.ts             # Server entry point
├── dist/                    # Backend Production build output
├── .env                     # Backend Environment variables
├── package.json             # Project dependencies and scripts
└── tsconfig.json            # TypeScript configuration
```

## Technology Stack
- React + Vite + TypeScript
- React-Helmet-Async
- Tailwindcss
- Axios
- Express.js + TypeScript (Tsx for development and Esbuild for production)
- LowDB (JSON Database)
- Concurrently

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a list of changes and version history.


## License

This template is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 