"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Empanelments() {
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
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center text-dark mb-12"
          variants={fadeUp}
          {...inView}
        >
          Professional Empanelments / Registrations
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Government Registrations */}
          <motion.div variants={slideLeft} {...inView}>
            <h3 className="text-lg font-semibold text-primary mb-6">
              Government / Professional Registrations
            </h3>
            <ul className="space-y-4">
              <li className="border-b border-gray-100 pb-3">
                <p className="font-medium text-dark text-sm">
                  MCD Delhi — Engineer &amp; Structural Engineer
                </p>
                <p className="text-muted text-xs mt-1">
                  Registration: E-1803, SE-74 (Since 1997)
                </p>
              </li>
              <li className="border-b border-gray-100 pb-3">
                <p className="font-medium text-dark text-sm">
                  Income Tax Department — Govt Approved Valuer
                </p>
                <p className="text-muted text-xs mt-1">
                  Cat-I/625/174/2014-15, Cat-I/625/174/2020-21 (Since 2014)
                </p>
              </li>
              <li>
                <p className="font-medium text-dark text-sm">
                  Institution of Valuers — Member
                </p>
                <p className="text-muted text-xs mt-1">
                  Registration: F-25961
                </p>
              </li>
            </ul>
          </motion.div>

          {/* Banking Empanelments */}
          <motion.div variants={slideRight} {...inView}>
            <h3 className="text-lg font-semibold text-primary mb-6">
              IBBI &amp; Banking Empanelments
            </h3>
            <ul className="space-y-4">
              <li className="border-b border-gray-100 pb-3">
                <p className="font-medium text-dark text-sm">
                  IBBI — Land &amp; Building Valuer
                </p>
                <p className="text-muted text-xs mt-1">
                  Registration: IBBI/RV/02/2019/11402
                </p>
              </li>
              <li className="border-b border-gray-100 pb-3">
                <p className="font-medium text-dark text-sm">
                  Punjab National Bank — Category A
                </p>
              </li>
              <li className="border-b border-gray-100 pb-3">
                <p className="font-medium text-dark text-sm">
                  PFC Consulting Limited (PFCCL) — Valuer
                </p>
              </li>
              <li className="border-b border-gray-100 pb-3">
                <p className="font-medium text-dark text-sm">
                  UCO Bank — Category A
                </p>
              </li>
              <li className="border-b border-gray-100 pb-3">
                <p className="font-medium text-dark text-sm">
                  SBI Bank — Category A
                </p>
              </li>
              <li>
                <p className="font-medium text-dark text-sm">
                  Union Bank of India
                </p>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
