import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Batra & Associates | Govt Approved Property Valuers & Structural Engineers in Delhi",
  description:
    "Government and IBBI approved property valuers and structural engineers in New Delhi. Led by Er. Nanu Batra, M.Tech IIT Delhi, with 20+ years of experience in asset valuation, structural consultancy, and building audits. Empanelled with SBI, PNB, UCO Bank.",
  keywords: [
    "property valuation Delhi",
    "govt approved valuer",
    "structural engineer Delhi",
    "IBBI registered valuer",
    "building structural audit",
    "asset valuation India",
    "property valuer New Delhi",
    "structural consultancy Delhi",
  ],
  authors: [{ name: "Batra & Associates" }],
  openGraph: {
    title: "Batra & Associates | Property Valuers & Structural Engineers",
    description:
      "Government and IBBI approved property valuers and structural engineers in New Delhi. 20+ years of experience.",
    url: "https://batraassociate.com",
    siteName: "Batra & Associates",
    type: "website",
    locale: "en_IN",
  },
  alternates: {
    canonical: "https://batraassociate.com",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Batra & Associates",
  description:
    "Government and IBBI approved property valuers and structural engineers",
  url: "https://batraassociate.com",
  telephone: "+91-9811741187",
  email: "info@batraassociate.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "House No. 3, Road No. 5, East Punjabi Bagh",
    addressLocality: "New Delhi",
    postalCode: "110026",
    addressCountry: "IN",
  },
  founder: {
    "@type": "Person",
    name: "Nanu Batra",
    jobTitle: "Structural Engineer",
    alumniOf: "IIT Delhi",
  },
  areaServed: "Delhi NCR, India",
  serviceType: [
    "Property Valuation",
    "Structural Consultancy",
    "Structural Audit",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}

        {/* Google Analytics 4 — Replace G-XXXXXXXXXX with your tracking ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </body>
    </html>
  );
}
