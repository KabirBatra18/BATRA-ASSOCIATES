"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Team() {
  const prefersReducedMotion = useReducedMotion();

  const inView = prefersReducedMotion
    ? {}
    : { initial: "hidden" as const, whileInView: "visible" as const, viewport: { once: true, margin: "-60px" } };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, damping: 25, stiffness: 120 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, damping: 22, stiffness: 100 } },
  };

  return (
    <section className="py-20 md:py-24 bg-light">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center text-dark mb-2"
          variants={fadeUp}
          {...inView}
        >
          Meet Our Experts
        </motion.h2>
        <motion.p
          className="text-muted text-sm text-center mb-10 max-w-xl mx-auto"
          variants={fadeUp}
          {...inView}
        >
          A team of qualified engineers dedicated to precision and integrity.
        </motion.p>

        <div className="flex flex-col md:flex-row gap-8 max-w-3xl mx-auto items-start justify-center">
          {/* Nanu Batra - Principal Valuer (larger card) */}
          <motion.div
            className="bg-white rounded-xl p-8 shadow-[0px_10px_30px_rgba(0,0,0,0.05)] text-center md:w-[58%]"
            variants={cardVariant}
            {...inView}
          >
            <div className="w-40 h-40 mx-auto mb-5 rounded-full overflow-hidden border-4 border-primary/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/team-nanu.png?t=${Date.now()}`}
                alt="Er. Nanu Batra"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-bold text-dark">Er. Nanu Batra</h3>
            <p className="text-primary font-semibold text-sm mt-1">Principal Valuer</p>
            <ul className="mt-4 space-y-1.5 text-left inline-block">
              {[
                "M.Tech, IIT Delhi",
                "Govt & IBBI Approved Valuer",
                "Empanelled with SBI, PNB, UCO Bank",
              ].map((cred) => (
                <li key={cred} className="text-muted text-sm flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {cred}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Kabir Batra - Engineer (smaller card) */}
          <motion.div
            className="bg-white rounded-xl p-8 shadow-[0px_10px_30px_rgba(0,0,0,0.05)] text-center md:w-[42%]"
            variants={cardVariant}
            {...inView}
          >
            <div className="w-40 h-40 mx-auto mb-5 rounded-full overflow-hidden border-4 border-primary/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/team-kabir.png?t=${Date.now()}`}
                alt="Er. Kabir Batra"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-bold text-dark">Er. Kabir Batra</h3>
            <p className="text-primary font-semibold text-sm mt-1">Engineer</p>
            <ul className="mt-4 space-y-1.5 text-left inline-block">
              {[
                "B.Tech, NSUT Delhi",
                "On-Site Inspections & Analysis",
                "Valuation Documentation",
              ].map((cred) => (
                <li key={cred} className="text-muted text-sm flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {cred}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
