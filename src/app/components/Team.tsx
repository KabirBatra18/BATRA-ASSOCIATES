"use client";

import { motion, useReducedMotion } from "framer-motion";

const team = [
  {
    name: "Er. Nanu Batra",
    role: "Founder & Principal Valuer",
    photo: "/images/team-nanu.png",
    credentials: [
      "M.Tech, IIT Delhi",
      "Govt & IBBI Approved Valuer",
      "20+ Years of Experience",
      "Empanelled with SBI, PNB, UCO Bank",
    ],
  },
  {
    name: "Er. Kabir Batra",
    role: "Engineer",
    photo: "/images/team-kabir.png",
    credentials: [
      "B.Tech, NSUT Delhi",
      "On-Site Inspections & Analysis",
      "Valuation Documentation",
    ],
  },
];

export default function Team() {
  const prefersReducedMotion = useReducedMotion();

  const inView = prefersReducedMotion
    ? {}
    : { initial: "hidden" as const, whileInView: "visible" as const, viewport: { once: true, margin: "-60px" } };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, damping: 25, stiffness: 120 } },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
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

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto"
          variants={stagger}
          {...inView}
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              className="bg-white rounded-xl p-8 shadow-[0px_10px_30px_rgba(0,0,0,0.05)] text-center"
              variants={cardVariant}
            >
              <div className="w-36 h-36 mx-auto mb-5 rounded-full overflow-hidden border-4 border-primary/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${member.photo}?t=${Date.now()}`}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-dark">{member.name}</h3>
              <p className="text-primary font-semibold text-sm mt-1">{member.role}</p>
              <ul className="mt-4 space-y-1.5 text-left inline-block">
                {member.credentials.map((cred) => (
                  <li key={cred} className="text-muted text-sm flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {cred}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
