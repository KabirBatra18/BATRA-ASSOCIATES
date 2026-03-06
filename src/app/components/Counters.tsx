"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

function useCounterAnimation(end: number, duration: number = 1500, skipAnimation: boolean = false) {
  const [count, setCount] = useState(skipAnimation ? end : 0);
  const [started, setStarted] = useState(skipAnimation);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (skipAnimation) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started, skipAnimation]);

  useEffect(() => {
    if (!started || skipAnimation) return;

    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [started, end, duration, skipAnimation]);

  return { count, ref };
}

const counters = [
  { value: 600, label: "Valuations Completed" },
  { value: 20, label: "Years of Experience" },
  { value: 1000, label: "Clients Served" },
  { value: 5, label: "Bank Empanelments" },
];

export default function Counters() {
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

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring" as const, damping: 18, stiffness: 100 } },
  };

  return (
    <section
      className="py-20 md:py-28 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url(/images/counters-bg.jpg)" }}
    >
      <div className="absolute inset-0 bg-dark/70" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center text-white mb-10"
          variants={fadeUp}
          {...inView}
        >
          Some Numbers That Matter
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl mx-auto"
          variants={stagger}
          {...inView}
        >
          {counters.map((counter) => (
            <motion.div key={counter.label} variants={scaleIn}>
              <CounterItem {...counter} skipAnimation={!!prefersReducedMotion} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CounterItem({ value, label, skipAnimation }: { value: number; label: string; skipAnimation: boolean }) {
  const { count, ref } = useCounterAnimation(value, 1500, skipAnimation);

  return (
    <div ref={ref} className="text-center" aria-label={`${value}+ ${label}`}>
      <div className="counter-value text-white" aria-hidden="true">
        {count}
        <span className="text-3xl">+</span>
      </div>
      <p className="text-white/80 text-sm mt-2 font-medium">{label}</p>
    </div>
  );
}
