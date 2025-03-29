import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><meta charSet="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><title>Martín Simbaña | Software Development Student</title><meta name="description" content="Software Development student specializing in JavaScript, React, and Node.js. Passionate about building modern web applications and learning new technologies." /><link rel="icon" href="https://static-00.iconduck.com/assets.00/cv-icon-216x256-oug02lqi.png" sizes="any" /><link rel="icon" href="https://static-00.iconduck.com/assets.00/cv-icon-216x256-oug02lqi.png" type="image/svg+xml" /><link rel="apple-touch-icon" href="https://static-00.iconduck.com/assets.00/cv-icon-216x256-oug02lqi.png" /><meta property="og:title" content="Martín Simbaña | Software Development Student" /><meta property="og:description" content="Software Development student | JavaScript, React, Node.js | Building modern web applications." /><meta property="og:image" content="https://martinsimbana.vercel.app/images/avatar.jpg" /><meta property="og:url" content="https://martinsimbana.vercel.app/" /><meta property="og:type" content="website" /><Script
          id="schema-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Martín Simbaña",
              "jobTitle": "Software Development Student",
              "url": "https://martinsimbana.vercel.app/",
              "telephone": "+593983331900",
              "email": "martin.simbana007@gmail.com",
              "sameAs": [
                "https://www.linkedin.com/in/mart%C3%ADn-simba%C3%B1a-9a6a91357/",
                "https://github.com/martin1906s"
              ],
              "description": "Aspiring full-stack developer with skills in JavaScript, React, Node.js, and PostgreSQL. Currently expanding knowledge in modern web technologies.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Quito",
                "addressRegion": "Pichincha",
                "addressCountry": "Ecuador"
              },
              "birthDate": "2007-06-19",
              "image": "https://martinsimbana.vercel.app/images/avatar.jpg",
              "knowsAbout": ["HTML", "JavaScript", "React", "Node.js", "PostgreSQL"]
            })
          }}
        /></head>
      <body>
        {children}
      </body>
    </html>
  );
}