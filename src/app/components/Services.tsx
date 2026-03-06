"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Services() {
  const prefersReducedMotion = useReducedMotion();

  const inView = prefersReducedMotion
    ? {}
    : { initial: "hidden" as const, whileInView: "visible" as const, viewport: { once: true, margin: "-60px" } };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, damping: 25, stiffness: 120 } },
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { type: "spring" as const, damping: 22, stiffness: 100 } },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { type: "spring" as const, damping: 22, stiffness: 100 } },
  };

  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center text-dark mb-10"
          variants={fadeUp}
          {...inView}
        >
          How Can We Help You?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Asset Valuation */}
          <motion.div
            className="bg-white rounded-lg p-7 shadow-[0px_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0px_10px_30px_rgba(0,0,0,0.1)] transition-shadow"
            variants={slideLeft}
            {...inView}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-primary text-2xl font-bold">&#8377;</span>
              <h3 className="text-xl font-bold text-primary">
                Asset Valuation
              </h3>
            </div>
            <p className="text-muted text-sm mb-4">
              We provide precise value assessment of your real estate for:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
              {[
                "Legal Proceedings",
                "IBBI Cases",
                "Income Tax",
                "Bank Loan",
                "Immigration",
                "Private Matters",
                "Visa Purpose",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-primary flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-sm text-dark">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-muted text-sm text-justify">
              Our detailed process includes site visit onsite analysis, market
              survey, documentation, and value calculation for a comprehensive
              property assessment.
            </p>
          </motion.div>

          {/* Structural Consultancy */}
          <motion.div
            className="bg-white rounded-lg p-7 shadow-[0px_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0px_10px_30px_rgba(0,0,0,0.1)] transition-shadow"
            variants={slideRight}
            {...inView}
          >
            <div className="flex items-center gap-3 mb-6">
              <svg
                className="w-6 h-6 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <h3 className="text-xl font-bold text-primary">
                Structural Consultancy
              </h3>
            </div>
            <p className="text-muted text-sm mb-4">
              Expert structural engineering services including:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
              {[
                "Design & Analysis",
                "Material Selection",
                "Structural Audit",
                "Inspection & Testing",
                "Architect Coordination",
                "Safety Assessment",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-primary flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-sm text-dark">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-muted text-sm text-justify">
              We ensure structural stability, load-bearing integrity, and
              compliance with safety standards for residential, commercial, and
              industrial projects.
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div className="text-center mt-12" variants={fadeUp} {...inView}>
          <a
            href="#contact"
            className="btn-shine inline-block bg-primary text-white px-8 py-3 rounded-full font-medium text-sm hover:bg-secondary transition-colors"
          >
            Need a Valuation? Talk to Our Expert
          </a>
        </motion.div>
      </div>
    </section>
  );
}
