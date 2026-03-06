import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getServiceBySlug,
  getAllSlugs,
} from "@/app/data/valuation-services";
import ClientShell from "@/app/components/ClientShell";
import ServiceHero from "@/app/components/valuation/ServiceHero";
import ServiceContent from "@/app/components/valuation/ServiceContent";
import Contact from "@/app/components/Contact";
import GoogleMap from "@/app/components/GoogleMap";
import Footer from "@/app/components/Footer";
import FixedButtons from "@/app/components/FixedButtons";
import BackToTop from "@/app/components/BackToTop";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: `https://batraassociate.com/valuation/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://batraassociate.com/valuation/${service.slug}`,
      siteName: "Batra & Associates",
      type: "website",
      locale: "en_IN",
    },
  };
}

export default async function ValuationServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.heroHeading,
    description: service.metaDescription,
    provider: {
      "@type": "ProfessionalService",
      name: "Batra & Associates",
      telephone: "+91-9811741187",
      email: "info@batraassociate.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "House No. 3, Road No. 5, East Punjabi Bagh",
        addressLocality: "New Delhi",
        postalCode: "110026",
        addressCountry: "IN",
      },
    },
    serviceType: service.schemaServiceType,
    areaServed: "Delhi NCR, India",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:rounded focus:shadow-lg focus:text-primary">
        Skip to content
      </a>
      <ClientShell isSubPage />
      <main id="main-content">
        <ServiceHero
          heading={service.heroHeading}
          subheading={service.heroSubheading}
        />
        <ServiceContent service={service} />
        <Contact />
        <GoogleMap />
      </main>
      <Footer isSubPage />
      <FixedButtons />
      <BackToTop />
    </>
  );
}
