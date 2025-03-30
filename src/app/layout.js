import Script from 'next/script';
import './globals.css';

export default function RootLayout({ children }) {
  const canonicalUrl = 'https://martinsimbana.vercel.app';
  const pageTitle = 'Martin Simbaña | Desarrollador FullStack JS - React/Node.js Expert';
  const pageDescription =
    'CV profesional de Martin Simbaña - Desarrollador FullStack con 3 años de experiencia en JavaScript, React, Node.js y PostgreSQL. Portfolio con proyectos reales en Ecuador.';

  return (
    <html lang="es" prefix="og: https://ogp.me/ns#">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#0f172a" />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="desarrollador JavaScript Ecuador, programador React Quito, desarrollador Node.js, portfolio programador, CV desarrollador web, Martin Simbaña developer" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={`${canonicalUrl}/images/seo-preview.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={`${canonicalUrl}/images/seo-preview.jpg`} />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/cv.svg" />
        <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=G-V9YMPXWEKC`} />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V9YMPXWEKC', { page_path: window.location.pathname, anonymize_ip: true });
          `}
        </Script>
      </head>
      <body className="bg-slate-900 text-slate-100">{children}</body>
    </html>
  );
}