"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { WHATSAPP_URL } from "@/app/data/constants";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, damping: 25, stiffness: 120 } },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { type: "spring" as const, damping: 20, stiffness: 100 } },
  };

  if (prefersReducedMotion) {
    return <HeroStatic />;
  }

  return (
    <section
      id="home"
      className="relative min-h-[600px] flex items-center pt-28 pb-16 md:pt-36 md:pb-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/images/hero-bg.jpg)" }}
    >
      <div className="absolute inset-0 bg-white/80" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Text */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-semibold mb-5"
              variants={fadeUp}
            >
              <span>Est. 1997</span>
              <span className="w-1 h-1 bg-primary rounded-full" />
              <span>20+ Years of Trust</span>
            </motion.div>
            <motion.h1
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-bold leading-tight tracking-tight text-dark"
              variants={fadeUp}
            >
              Delhi&apos;s Trusted{" "}
              <span className="text-primary">Govt Approved</span> Property
              Valuers &amp; Structural Engineers
            </motion.h1>
            <motion.p
              className="mt-4 text-muted text-sm md:text-base leading-relaxed max-w-lg mx-auto lg:mx-0"
              variants={fadeUp}
            >
              Led by Er. Nanu Batra, M.Tech IIT Delhi. Empanelled with SBI,
              PNB &amp; UCO Bank. IBBI Registered Valuer.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={fadeUp}
            >
              <motion.a
                href="#contact"
                className="btn-shine inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-secondary transition-colors text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Get a Free Consultation
              </motion.a>
              <motion.a
                href={`${WHATSAPP_URL}?text=${encodeURIComponent("Hi, I need a property valuation.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold text-sm hover:bg-primary hover:text-white transition-colors text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image + Credentials */}
          <motion.div
            className="lg:w-1/2 flex flex-col items-center"
            variants={fadeLeft}
            initial="hidden"
            animate="show"
          >
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero-nanu.png"
                alt="Structural Engineer Nanu Batra, M.Tech IIT Delhi"
                className="max-w-[300px] md:max-w-[400px] h-auto"
              />
            </div>
            <motion.div
              className="mt-4 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <h2 className="text-base md:text-lg font-semibold text-dark">
                Structural Er. Nanu Batra
              </h2>
              <p className="text-sm md:text-base text-dark">
                M.Tech IIT Delhi
              </p>
              <p className="text-sm md:text-base text-dark">
                Govt &amp; IBBI Approved Valuer
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroStatic() {
  return (
    <section
      id="home"
      className="relative min-h-[600px] flex items-center pt-28 pb-16 md:pt-36 md:pb-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/images/hero-bg.jpg)" }}
    >
      <div className="absolute inset-0 bg-white/80" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-semibold mb-5">
              <span>Est. 1997</span>
              <span className="w-1 h-1 bg-primary rounded-full" />
              <span>20+ Years of Trust</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-bold leading-tight tracking-tight text-dark">
              Delhi&apos;s Trusted{" "}
              <span className="text-primary">Govt Approved</span> Property
              Valuers &amp; Structural Engineers
            </h1>
            <p className="mt-4 text-muted text-sm md:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
              Led by Er. Nanu Batra, M.Tech IIT Delhi. Empanelled with SBI,
              PNB &amp; UCO Bank. IBBI Registered Valuer.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="btn-shine inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-secondary transition-colors text-center"
              >
                Get a Free Consultation
              </a>
              <a
                href={`https://wa.me/919811741187?text=${encodeURIComponent("Hi, I need a property valuation.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold text-sm hover:bg-primary hover:text-white transition-colors text-center"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/hero-nanu.png" alt="Structural Engineer Nanu Batra, M.Tech IIT Delhi" className="max-w-[300px] md:max-w-[400px] h-auto" />
            <div className="mt-4 text-center">
              <h2 className="text-base md:text-lg font-semibold text-dark">Structural Er. Nanu Batra</h2>
              <p className="text-sm md:text-base text-dark">M.Tech IIT Delhi</p>
              <p className="text-sm md:text-base text-dark">Govt &amp; IBBI Approved Valuer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
