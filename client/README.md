# React-Helmet-Async Boilerplate Implementation

A modern React application built with TypeScript and Vite, showcasing advanced SEO optimization using React-Helmet-Async. This frontend is part of a full-stack recipe sharing platform that demonstrates best practices in modern web development.

## Features

- ⚛️ Built with React 19 and TypeScript
- 🎯 Page-level SEO management using React Helmet Async
- 🚀 Vite for lightning-fast development
- 🎨 TailwindCSS for modern, utility-first styling
- 📱 Responsive design for all devices
- 🛣️ React Router for client-side routing
- 🔍 Dynamic meta tags for optimal SEO
- 🖼️ Hero Icons for beautiful UI elements
- 📦 Axios for API communication

## Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally


## SEO Implementation

The application uses React Helmet Async for managing SEO meta tags. Each page component includes SEO configuration:

```tsx
<SEO
  title="Page Title"
  description="Page description"
  image="/path/to/image.jpg"
  type="website"
  canonicalUrl="https://example.com/page"
/>
```