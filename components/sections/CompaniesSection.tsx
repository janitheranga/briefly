"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export function CompaniesSection() {
  const [duplicatedCompanies, setDuplicatedCompanies] = useState<string[]>([]);

  const companies = [
    "Google",
    "Microsoft",
    "Stanford",
    "Harvard",
    "MIT",
    "Apple",
    "Amazon",
    "Meta",
  ];

  useEffect(() => {
    setDuplicatedCompanies([...companies, ...companies]);
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-mauve-shadow-50 dark:bg-mauve-shadow-950 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-lg text-mauve-shadow-600 dark:text-mauve-shadow-400">
            Join thousands of professionals who use Briefly daily
          </p>
        </motion.div>

        {/* Infinite Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8 md:gap-12"
            animate={{ x: [-1000, 0] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {duplicatedCompanies.map((company, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="shrink-0 w-48"
              >
                <div className="h-20 rounded-xl bg-background border border-mauve-shadow-200 dark:border-mauve-shadow-800 flex items-center justify-center hover:shadow-lg hover:border-powder-petal-500 transition-all duration-300 cursor-pointer">
                  <p className="text-lg font-semibold text-foreground">
                    {company}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Fade gradient overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-linear-to-r from-mauve-shadow-50 dark:from-mauve-shadow-950 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-linear-to-l from-mauve-shadow-50 dark:from-mauve-shadow-950 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
