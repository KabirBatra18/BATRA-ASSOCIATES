import type { Metadata } from "next";
import {
  PHONE,
  PHONE_DISPLAY,
  WHATSAPP_URL,
  ADDRESS,
  EMAIL,
} from "@/app/data/constants";

export const metadata: Metadata = {
  title:
    "Property Valuation in Delhi NCR | Govt Approved Valuer | Batra & Associates",
  description:
    "Govt & IBBI approved property valuation in Delhi NCR. Court valuation, bank loan, ITR, visa, family settlement. Call 9811741187. Est. 1975, 50+ years of trust.",
  keywords: [
    "property valuation Delhi",
    "property valuation Delhi NCR",
    "govt approved valuer Delhi",
    "court valuation Delhi",
    "bank loan valuation",
    "ITR property valuation",
    "visa property valuation",
    "family settlement valuation",
    "IBBI registered valuer Delhi",
    "property valuer near me",
  ],
  alternates: {
    canonical: "https://batraassociate.com/property-valuation-delhi",
  },
  openGraph: {
    title: "Property Valuation Delhi NCR | Call 9811741187",
    description:
      "Govt & IBBI approved property valuation for court, bank loan, ITR, visa & family settlement. 50+ years of trust.",
    url: "https://batraassociate.com/property-valuation-delhi",
    siteName: "Batra & Associates",
    type: "website",
    locale: "en_IN",
  },
};

const services = [
  {
    title: "Court Valuation",
    desc: "Certified property valuation reports accepted by all courts in Delhi NCR for legal disputes, partition suits, and compensation cases.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 3v2m0 14v2m-7-9H3m18 0h-2M6.34 6.34l-1.42-1.42m14.14 0l-1.42 1.42M6.34 17.66l-1.42 1.42m14.14 0l-1.42-1.42M12 8a4 4 0 100 8 4 4 0 000-8z"
      />
    ),
    svgIcon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l9-3 9 3v2H3V6zm1 4h16v2H4v-2zm1 4h14v6H5v-6zm4 2v2m4-2v2" />
      </svg>
    ),
  },
  {
    title: "Bank Loan Valuation",
    desc: "Empanelled with SBI, PNB & UCO Bank. Quick turnaround on property valuation reports for home loans and mortgage approvals.",
    svgIcon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 7a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V7zm0 3h20M7 15h2m4 0h4" />
      </svg>
    ),
  },
  {
    title: "ITR / Income Tax Valuation",
    desc: "Property valuation for income tax returns, capital gains computation, and wealth tax assessment as per IT Act requirements.",
    svgIcon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Visa Property Valuation",
    desc: "Property valuation certificates for visa applications to embassies and consulates. Accepted format for all major countries.",
    svgIcon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    title: "Family Settlement Valuation",
    desc: "Fair market valuation for property division among family members, inheritance disputes, and partition agreements.",
    svgIcon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Insurance & Other Valuation",
    desc: "Property valuation for insurance claims, company audits, NRI property assessment, and all other statutory requirements.",
    svgIcon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Property Valuation in Delhi NCR",
  description:
    "Government and IBBI approved property valuation services in Delhi NCR for court, bank loan, ITR, visa, and family settlement purposes.",
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
  serviceType: "Property Valuation",
  areaServed: {
    "@type": "Place",
    name: "Delhi NCR, India",
  },
};

export default function PropertyValuationDelhi() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Sticky top bar with phone */}
      <div className="bg-primary text-white py-2.5 text-center text-sm font-medium">
        Govt & IBBI Approved Valuers &mdash; Est. 1975 &mdash; Empanelled with
        SBI, PNB, UCO Bank
      </div>

      <main>
        {/* Hero — above the fold */}
        <section className="bg-white py-12 md:py-20">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-semibold mb-6">
              <span>50+ Years of Trust</span>
              <span className="w-1 h-1 bg-primary rounded-full" />
              <span>Delhi NCR</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark leading-tight tracking-tight">
              Property Valuation{" "}
              <span className="text-primary">Delhi NCR</span>
            </h1>

            <p className="mt-4 text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Government approved property valuation for court, bank loan, ITR,
              visa &amp; family settlement. Trusted by courts, banks &amp;
              embassies since 1975.
            </p>

            {/* Phone number — prominent */}
            <div className="mt-8">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-3 text-3xl sm:text-4xl md:text-5xl font-bold text-primary hover:text-secondary transition-colors"
              >
                <svg
                  className="w-10 h-10 md:w-12 md:h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                {PHONE_DISPLAY}
              </a>
            </div>

            {/* CTA */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-secondary transition-colors shadow-lg shadow-primary/25"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                Call Now
              </a>
              <a
                href={`${WHATSAPP_URL}?text=${encodeURIComponent("Hi, I need a property valuation in Delhi.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25d366] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#1da851] transition-colors shadow-lg shadow-[#25d366]/25"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-muted">
              <span className="flex items-center gap-1.5 bg-light px-3 py-1.5 rounded-full">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Govt Approved
              </span>
              <span className="flex items-center gap-1.5 bg-light px-3 py-1.5 rounded-full">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                IBBI Registered
              </span>
              <span className="flex items-center gap-1.5 bg-light px-3 py-1.5 rounded-full">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                M.Tech IIT Delhi
              </span>
              <span className="flex items-center gap-1.5 bg-light px-3 py-1.5 rounded-full">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                SBI / PNB Empanelled
              </span>
            </div>
          </div>
        </section>

        {/* Services grid */}
        <section className="bg-light py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-dark mb-3">
              Valuation Services We Offer
            </h2>
            <p className="text-muted text-sm text-center mb-10 max-w-2xl mx-auto">
              Comprehensive property valuation for every legal, financial &amp;
              personal requirement in Delhi NCR.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="bg-white rounded-xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0px_8px_30px_rgba(0,0,0,0.08)] transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    {s.svgIcon}
                  </div>
                  <h3 className="text-base font-bold text-dark mb-2">
                    {s.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why choose us — brief */}
        <section className="bg-white py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-dark mb-10">
              Why Choose Batra &amp; Associates?
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: "50+ Years of Experience",
                  desc: "Established in 1975, trusted by thousands of clients across Delhi NCR.",
                },
                {
                  title: "Govt & IBBI Approved",
                  desc: "Government registered and IBBI certified valuers. Reports accepted everywhere.",
                },
                {
                  title: "Bank Empanelled",
                  desc: "Empanelled with SBI, PNB & UCO Bank for seamless loan processing.",
                },
                {
                  title: "IIT Delhi Expertise",
                  desc: "Led by Er. Nanu Batra, M.Tech from IIT Delhi with decades of field experience.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark text-sm">
                      {item.title}
                    </h3>
                    <p className="text-muted text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sticky bottom CTA (mobile) */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 md:hidden z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
          <a
            href={`tel:${PHONE}`}
            className="flex items-center justify-center gap-2 bg-primary text-white w-full py-3.5 rounded-full font-semibold text-base"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Call Now &mdash; {PHONE_DISPLAY}
          </a>
        </div>

        {/* Footer — minimal */}
        <footer className="bg-dark text-white/70 py-10 pb-24 md:pb-10">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h3 className="text-white font-bold text-lg mb-2">
              Batra &amp; Associates
            </h3>
            <p className="text-sm mb-4">
              Govt Approved Property Valuers &amp; Structural Engineers
            </p>
            <p className="text-sm mb-1">{ADDRESS.full}</p>
            <p className="text-sm mb-1">
              <a href={`tel:${PHONE}`} className="text-white hover:text-primary transition-colors">
                {PHONE_DISPLAY}
              </a>{" "}
              &middot;{" "}
              <a href={`mailto:${EMAIL}`} className="text-white hover:text-primary transition-colors">
                {EMAIL}
              </a>
            </p>
            <p className="text-xs text-white/40 mt-6">
              &copy; {new Date().getFullYear()} Batra &amp; Associates. All
              rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
