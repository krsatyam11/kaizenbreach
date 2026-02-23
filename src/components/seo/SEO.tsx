// src/components/seo/SEO.tsx
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: "website" | "article";
  name?: string;
}

const SEO = ({ title, description, canonical, type = "website", name = "KaizenBreach" }: SEOProps) => {
  const siteUrl = "https://kaizenbreach.vercel.app"; // REPLACE WITH YOUR ACTUAL DOMAIN
  const currentUrl = canonical ? canonical : window.location.href;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{title} | {name}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content={name} />
      <meta property="og:image" content={`${siteUrl}/og-image.png`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />
    </Helmet>
  );
};

export default SEO;