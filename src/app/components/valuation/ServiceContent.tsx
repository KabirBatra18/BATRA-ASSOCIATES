"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ValuationService } from "@/app/data/valuation-services";
import { PHONE_DISPLAY } from "@/app/data/constants";

interface ServiceContentProps {
  service: ValuationService;
}

const credentialCards = [
  {
    icon: (
      <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Govt Approved",
    desc: "Registered with Income Tax Dept & MCD Delhi since 1997",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </svg>
    ),
    title: "IBBI Registered",
    desc: "Authorized valuer under the Insolvency & Bankruptcy Code",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
    title: "Bank Empanelled",
    desc: "Category-A with SBI, PNB, UCO Bank, Union Bank",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10" />
        <path d="M18 20V4" />
        <path d="M6 20v-4" />
      </svg>
    ),
    title: "20+ Years",
    desc: "Led by Er. Nanu Batra, M.Tech IIT Delhi",
  },
];

export default function ServiceContent({ service }: ServiceContentProps) {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, damping: 25, stiffness: 120 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const slideFromLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { type: "spring" as const, damping: 22, stiffness: 100 } },
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { type: "spring" as const, damping: 22, stiffness: 100 } },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring" as const, damping: 18, stiffness: 100 } },
  };

  const inView = prefersReducedMotion
    ? {}
    : { initial: "hidden" as const, whileInView: "visible" as const, viewport: { once: true, margin: "-50px" } };

  return (
    <>
      {/* What Is Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-dark mb-6"
            variants={fadeUp}
            {...inView}
          >
            {service.whatIsTitle}
          </motion.h2>
          <motion.p
            className="text-muted text-sm md:text-base leading-relaxed mb-8"
            variants={fadeUp}
            {...inView}
          >
            {service.whatIsDescription}
          </motion.p>
          <motion.ul
            className="space-y-3"
            variants={staggerContainer}
            {...inView}
          >
            {service.whatIsBullets.map((bullet, i) => (
              <motion.li key={i} className="flex gap-3" variants={slideFromLeft}>
                <svg
                  className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-dark text-sm md:text-base leading-relaxed">
                  {bullet}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-20 bg-light">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-dark mb-12 text-center"
            variants={fadeUp}
            {...inView}
          >
            Our Process
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.processSteps.map((step) => (
              <motion.div
                key={step.step}
                className="bg-white rounded-lg p-6 shadow-[0px_10px_30px_rgba(0,0,0,0.04)]"
                variants={step.step % 2 === 1 ? slideFromLeft : slideFromRight}
                {...inView}
              >
                <div className="flex items-center gap-4 mb-3">
                  <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-semibold text-dark">
                    {step.title}
                  </h3>
                </div>
                <p className="text-muted text-sm leading-relaxed pl-14 max-md:pl-0">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Batra & Associates */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-dark mb-6 text-center"
            variants={fadeUp}
            {...inView}
          >
            Why Batra &amp; Associates?
          </motion.h2>
          <motion.p
            className="text-muted text-sm md:text-base leading-relaxed text-center mb-10 max-w-2xl mx-auto"
            variants={fadeUp}
            {...inView}
          >
            {service.whyUsIntro}
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            {...inView}
          >
            {credentialCards.map((item) => (
              <motion.div
                key={item.title}
                className="text-center p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow"
                variants={scaleUp}
                whileHover={prefersReducedMotion ? {} : { y: -4, transition: { duration: 0.2 } }}
              >
                <div className="flex justify-center mb-3">{item.icon}</div>
                <h3 className="font-semibold text-dark text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-muted text-xs leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Second CTA */}
          <motion.div
            className="text-center mt-12"
            variants={fadeUp}
            {...inView}
          >
            <motion.a
              href={`tel:+91${PHONE_DISPLAY}`}
              className="btn-shine inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-secondary transition-colors"
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              Get a Quote: {PHONE_DISPLAY}
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
