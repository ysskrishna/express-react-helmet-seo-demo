# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-03-09

### Added
- Initial project setup with Express.js backend and React frontend
- Frontend Architecture:
  - Vite as build tool with TypeScript support
  - TailwindCSS for styling
  - React-Helmet-Async for page-level SEO optimization
- Backend Architecture:
  - Express.js with TypeScript support
  - LowDB for JSON-based data persistence
- Development Environment:
  - Concurrent development server setup using `concurrently`
  - Hot-reloading TypeScript backend using `tsx`
  - Unified development workflow for frontend and backend
- Production Setup:
  - Configured `esbuild` for optimized backend bundling
  - Unified build process for frontend and backend
  - Single server configuration for serving both applications


[1.0.0]: https://github.com/ysskrishna/express-react-helmet-seo-demo/releases/tag/v1.0.0