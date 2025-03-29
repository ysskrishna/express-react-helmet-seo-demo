import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  ogImage?: string;
  twitterImage?: string;
  type?: string;
  canonicalUrl?: string;
}

export function SEO({
  title = 'Express React Typescript SEO Starter',
  description = 'A full-stack React + Express starter template with advanced SEO optimization using React Helmet Async. Includes TypeScript, Vite, and TailwindCSS.',
  ogImage = '/og-image.png',
  twitterImage = '/twitter.png',
  type = 'website',
  canonicalUrl,
}: SEOProps) {
  const siteTitle = title === 'Express React Typescript SEO Starter' ? title : `${title} | Express React Typescript SEO Starter`;

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph meta tags */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={type} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twitterImage} />
    </Helmet>
  );
} 