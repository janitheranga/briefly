"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Users } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) * 0.05;
    const rotateY = (centerX - x) * 0.05;

    if (leftRef.current) {
      leftRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
    if (rightRef.current) {
      rightRef.current.style.transform = `perspective(1000px) rotateX(${
        rotateX * 0.5
      }deg) rotateY(${rotateY * 0.5}deg)`;
    }
  };

  const handleMouseLeave = () => {
    if (leftRef.current) {
      leftRef.current.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0)";
    }
    if (rightRef.current) {
      rightRef.current.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0)";
    }
  };

  return (
    <section className="relative min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-powder-petal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-frosted-mint-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-muted-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="max-w-7xl mx-auto w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="transition-transform duration-200 ease-out"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="text-foreground">Turn Your Notes Into</span>{" "}
                <span className="bg-linear-to-r from-powder-petal-500 to-frosted-mint-500 bg-clip-text text-transparent">
                  Concise Summaries
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-mauve-shadow-600 dark:text-mauve-shadow-400 mb-8"
            >
              Powered by advanced AI, Briefly transforms your lengthy notes into
              clear, actionable summaries in seconds. Perfect for students,
              professionals, and busy individuals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button variant="default" size="lg" className="group">
                Start Summarizing Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Trusted Users */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    className="w-10 h-10 rounded-full bg-linear-to-r from-powder-petal-500 to-frosted-mint-500 border-2 border-background dark:border-background flex items-center justify-center text-white font-bold text-sm"
                  >
                    {String.fromCharCode(64 + i)}
                  </motion.div>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  10,000+ Users
                </p>
                <p className="text-xs text-mauve-shadow-600 dark:text-mauve-shadow-400">
                  Trust Briefly Daily
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Scrolling Note Example */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative transition-transform duration-200 ease-out hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-linear-to-r from-powder-petal-500/20 to-frosted-mint-500/20"></div>
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="p-6 bg-background border border-mauve-shadow-200 dark:border-mauve-shadow-800 min-h-96 relative z-10"
              >
                <div className="space-y-4">
                  <div className="text-xs font-semibold text-powder-petal-500 uppercase tracking-wider">
                    Original Notes
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm text-foreground leading-relaxed">
                      The process of photosynthesis is a complex series of
                      biochemical reactions that occur in green plants, algae,
                      and certain bacteria. During photosynthesis, light energy
                      from the sun is converted into chemical energy stored in
                      glucose molecules...
                    </p>
                    <p className="text-sm text-foreground leading-relaxed">
                      The light-dependent reactions occur in the thylakoid
                      membranes where chlorophyll absorbs photons, exciting
                      electrons that move through an electron transport chain,
                      generating ATP and NADPH while releasing oxygen as a
                      byproduct...
                    </p>
                    <p className="text-sm text-foreground leading-relaxed">
                      The light-independent reactions, also known as the Calvin
                      cycle, use the ATP and NADPH from the light reactions to
                      fix carbon dioxide into glucose through a series of
                      enzymatic steps involving RuBisCO, one of the most
                      abundant proteins on Earth...
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
                className="absolute inset-0 p-6 bg-background border border-mauve-shadow-200 dark:border-mauve-shadow-800 rounded-2xl pointer-events-none"
              >
                <div className="space-y-4">
                  <div className="text-xs font-semibold text-frosted-mint-500 uppercase tracking-wider">
                    AI Summary
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="text-lg text-frosted-mint-500 font-bold">
                        1
                      </div>
                      <p className="text-sm text-foreground font-semibold">
                        Photosynthesis converts sunlight into chemical energy
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-lg text-frosted-mint-500 font-bold">
                        2
                      </div>
                      <p className="text-sm text-foreground font-semibold">
                        Light reactions generate ATP and NADPH from excited
                        electrons
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-lg text-frosted-mint-500 font-bold">
                        3
                      </div>
                      <p className="text-sm text-foreground font-semibold">
                        Calvin cycle uses these molecules to convert CO₂ into
                        glucose
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
