# SEO Documentation

This document explains the SEO (Search Engine Optimization) concepts and implementations used in this Express React TypeScript application.

## Table of Contents
- [SEO Documentation](#seo-documentation)
  - [Table of Contents](#table-of-contents)
  - [Introduction to SEO in React](#introduction-to-seo-in-react)
  - [Meta Tags](#meta-tags)
    - [Key Meta Tags Explained:](#key-meta-tags-explained)
  - [Open Graph Tags](#open-graph-tags)
    - [Important OG Tags:](#important-og-tags)
  - [Twitter Card Tags](#twitter-card-tags)
    - [Twitter Card Types:](#twitter-card-types)
  - [Additional Meta Tags](#additional-meta-tags)
    - [Robots Meta Tag (Controls indexing)](#robots-meta-tag-controls-indexing)
    - [Alternate Meta Tag (For multilingual sites)](#alternate-meta-tag-for-multilingual-sites)
    - [Author Meta Tag](#author-meta-tag)
  - [React Helmet Async](#react-helmet-async)
    - [Key Features:](#key-features)
  - [SEO Component](#seo-component)
    - [Basic Usage](#basic-usage)
    - [Available Props](#available-props)
  - [Best Practices](#best-practices)
  - [XML Sitemap](#xml-sitemap)
    - [Sitemap Structure](#sitemap-structure)
    - [Key Elements:](#key-elements)
    - [Best Practices for Sitemaps:](#best-practices-for-sitemaps)
    - [Sitemap Generator Script](#sitemap-generator-script)
      - [Usage](#usage)
      - [Configuration](#configuration)
      - [Customization](#customization)
      - [Integration](#integration)
  - [Useful References](#useful-references)

## Introduction to SEO in React

By default, React applications are client-rendered, which can cause issues with search engine indexing. Using **React Helmet Async** helps dynamically manage meta tags, improving search visibility. 

> 🔗 **Further Reading:** [Google's SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)

## Meta Tags

Meta tags provide important metadata to search engines and browsers. In this application, we use the following meta tags:

```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="Your page description here." />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://example.com/page" />
```

### Key Meta Tags Explained:
- `charset`: Defines character encoding.
- `viewport`: Controls responsive design on mobile.
- `description`: Provides a page summary for search results.
- `robots`: Specifies crawling and indexing rules.
- `canonical`: Prevents duplicate content issues by defining the preferred URL.

## Open Graph Tags

Open Graph (OG) tags control how URLs are displayed when shared on social media platforms like Facebook and LinkedIn.

```html
<meta property="og:title" content="Your Page Title" />
<meta property="og:description" content="Your Page Description" />
<meta property="og:image" content="https://example.com/image.jpg" />
<meta property="og:type" content="website" />
```

### Important OG Tags:
- `og:title`: The title of your content
- `og:description`: A brief description of your content
- `og:image`: The image URL that should appear when the link is shared
- `og:type`: The type of content (website, article, product, etc.)

## Twitter Card Tags

Twitter Card tags ensure your content is displayed properly when shared on Twitter.

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Your Page Title" />
<meta name="twitter:description" content="Your Page Description" />
<meta name="twitter:image" content="https://example.com/image.jpg" />
```

### Twitter Card Types:
- `summary`: Small card with title, description, and thumbnail
- `summary_large_image`: Large card with title, description, and large image

## Additional Meta Tags

### Robots Meta Tag (Controls indexing)
```html
<meta name="robots" content="index, follow" />
```
- `index, follow`: Allows search engines to index the page.
- `noindex, nofollow`: Prevents indexing.

### Alternate Meta Tag (For multilingual sites)
```html
<link rel="alternate" href="https://example.com/fr" hreflang="fr" />
```

### Author Meta Tag
```html
<meta name="author" content="Your Name" />
```

## React Helmet Async

This application uses `react-helmet-async` to dynamically manage meta tags efficiently in a server-safe way.

### Key Features:
- Thread-safe for server-side rendering.
- Prevents memory leaks.
- Supports async operations.
- Improves SEO by maintaining an optimized document head.

## SEO Component

The application includes a reusable SEO component located at [`client/src/components/SEO.tsx`](client/src/components/SEO.tsx) that you can use across your pages to manage meta tags.

### Basic Usage
```tsx
import { SEO } from '../components/SEO';

function YourPage() {
  return (
    <>
      <SEO 
        title="Your Page Title"
        description="Your page description"
        ogImage="/path/to/image.png"
        ogType="website"
        twitterImage="/path/to/twitter-image.png"
        canonicalUrl="https://yourdomain.com/your-page"
      />
      {/* Your page content */}
    </>
  );
}
```

### Available Props
- `title`: Page title (default: "Express React Typescript SEO Starter")
- `description`: Meta description
- `ogImage`: Open Graph image URL
- `ogType`: Open Graph Content type (default: "website")
- `twitterImage`: Twitter card image URL
- `canonicalUrl`: Canonical URL for the page

## Best Practices

1. **Image Optimization**
   - OG Image: 1200x630px (recommended size for optimal display on social media)
   - Twitter Image: 1200x600px (minimum size for large image cards)
   - Use appropriate image formats (WebP when possible)
   - Implement lazy loading for images
   - Ensure images have descriptive alt text for accessibility and SEO
   - Keep image file sizes under 1MB for optimal loading speed

2. **Title & Description**
   - Keep titles under 60 characters
   - Descriptions under 160 characters
   - Include main keywords naturally
   - Make them compelling and clickable

3. **Canonical URLs**
   - Prevents duplicate content issues
   - Specify the preferred version of a page
   - Use absolute URLs

4. **Performance Optimization**
   - Optimize images and assets
   - Implement lazy loading
   - Minimize CSS/JavaScript
   - Use proper caching strategies
   - Monitor Core Web Vitals

5. **Technical SEO**
   - Proper `robots.txt` configuration
   - Implement XML sitemaps
   - Monitor Core Web Vitals
   - Use HTTPS
   - Implement proper redirects

6. **Analytics & Monitoring**
   - Set up Google Search Console
   - Monitor search rankings
   - Track user behavior
   - Analyze performance metrics
   - Regular SEO audits

## XML Sitemap

The application includes a `sitemap.xml` file that helps search engines discover and index your pages efficiently.

### Sitemap Structure
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Key Elements:
- `loc`: The URL of the page
- `changefreq`: How often the page is likely to change (optional)
- `priority`: Relative importance of the page (0.0 to 1.0)

### Best Practices for Sitemaps:
1. Include all important pages
2. Keep URLs clean and canonical
3. Update regularly
4. Submit to Google Search Console
5. Use appropriate priority values
6. Include lastmod dates when possible
7. Keep file size under 50MB
8. Limit to 50,000 URLs per sitemap

### Sitemap Generator Script

The application includes a sitemap generator script located at [`client/scripts/generate-sitemap.js`](client/scripts/generate-sitemap.js). This script automatically generates a [`client/public/sitemap.xml`](client/public/sitemap.xml) file.

#### Usage
```bash
cd client
npm run generate-sitemap
```

#### Configuration
The script is configured with the following default settings:
- Base URL: `http://localhost:5000` (should be updated for production)
- Default pages:
  ```javascript
  const pages = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/recipes', changefreq: 'daily', priority: 0.9 },
    { url: '/creator', changefreq: 'monthly', priority: 0.7 },
  ];
  ```

#### Customization
To customize the sitemap:
1. Update the `BASE_URL` constant in the script for production
2. Modify the `pages` array to include your site's routes
3. Adjust `changefreq` and `priority` values as needed

#### Integration
The sitemap generation is available as an npm script in [`client/package.json`](client/package.json):
```json
{
  "scripts": {
    "generate-sitemap": "node scripts/generate-sitemap.js"
  }
}
```

## Useful References

- 🔗 [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- 🔗 [React Helmet Async Docs](https://github.com/staylor/react-helmet-async)
- 🔗 [Open Graph Spec](https://ogp.me/)
- 🔗 [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- 🔗 [Google Lighthouse](https://developers.google.com/web/tools/lighthouse/)

Remember to regularly update your meta tags and monitor performance to maintain optimal SEO. Keep track of search engine guidelines and best practices as they evolve. 🚀 