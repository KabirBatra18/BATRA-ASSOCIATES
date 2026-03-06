import Image from "next/image";
import { serviceLinks } from "@/app/data/navigation";
import { PHONE_FORMATTED, EMAIL, ADDRESS } from "@/app/data/constants";

interface FooterProps {
  isSubPage?: boolean;
}

export default function Footer({ isSubPage = false }: FooterProps) {
  const links = [
    { label: "Home", href: isSubPage ? "/" : "#home" },
    { label: "About Us", href: isSubPage ? "/#about" : "#about" },
    { label: "Contact", href: isSubPage ? "/#contact" : "#contact" },
  ];

  return (
    <footer className="bg-primary text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About */}
          <div>
            <Image
              src="/images/logo-white.png"
              alt="Batra & Associates"
              width={160}
              height={40}
              className="h-10 w-auto mb-4"
            />
            <p className="text-white/50 text-xs mb-2">Established 1975 | Govt &amp; IBBI Approved</p>
            <p className="text-white/80 text-sm leading-relaxed">
              Government and IBBI approved property valuers and structural
              engineers based in New Delhi. Trusted by leading banks and
              institutions across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/80 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Valuation Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Valuation Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/80 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <address className="not-italic space-y-3 text-sm text-white/80">
              <p>
                {ADDRESS.street},
                <br />
                {ADDRESS.area},
                <br />
                {ADDRESS.city} {ADDRESS.postalCode}
              </p>
              <p>
                <a
                  href={`tel:${PHONE_FORMATTED.replace(/\s/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {PHONE_FORMATTED}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="hover:text-white transition-colors"
                >
                  {EMAIL}
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-white/50 text-xs">
            &copy; {new Date().getFullYear()} Batra &amp; Associates. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
