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

        <div className="max-w-3xl mx-auto space-y-8">
          {/* Nanu Batra - Principal Valuer — wide horizontal card */}
          <motion.div
            className="bg-white rounded-xl p-8 shadow-[0px_10px_30px_rgba(0,0,0,0.05)] flex flex-col sm:flex-row items-center sm:items-start gap-8"
            variants={cardVariant}
            {...inView}
          >
            <div className="w-40 h-40 flex-shrink-0 rounded-full overflow-hidden border-4 border-primary/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/team-nanu.png?t=${Date.now()}`}
                alt="Er. Nanu Batra"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-dark">Er. Nanu Batra</h3>
              <p className="text-primary font-semibold text-sm mt-1">Principal Valuer</p>
              <ul className="mt-4 space-y-2">
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
            </div>
          </motion.div>

          {/* Kabir Batra - Engineer — compact card centered below */}
          <motion.div
            className="bg-white rounded-xl p-8 shadow-[0px_10px_30px_rgba(0,0,0,0.05)] flex flex-col sm:flex-row items-center sm:items-start gap-8 max-w-lg mx-auto"
            variants={cardVariant}
            {...inView}
          >
            <div className="w-36 h-36 flex-shrink-0 rounded-full overflow-hidden border-4 border-primary/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/team-kabir.png?t=${Date.now()}`}
                alt="Er. Kabir Batra"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-dark">Er. Kabir Batra</h3>
              <p className="text-primary font-semibold text-sm mt-1">Engineer</p>
              <ul className="mt-4 space-y-2">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
