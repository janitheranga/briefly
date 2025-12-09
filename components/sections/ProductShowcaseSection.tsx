"use client";

import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  FileText,
  Sparkles,
  Ruler,
  Tag,
  FolderTree,
  Search,
  Users,
  MessageSquare,
  History,
  FileOutput,
  Link2,
  Webhook,
} from "lucide-react";
import { useEffect, useState } from "react";

export function ProductShowcaseSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Instant Summaries",
      description:
        "Upload or paste your notes and get instant AI-powered summaries. Perfect for meeting notes, lectures, and articles.",
      features: [
        { label: "Multi-format support", icon: FileText },
        { label: "Real-time processing", icon: Sparkles },
        { label: "Customizable length", icon: Ruler },
      ],
    },
    {
      title: "Smart Organization",
      description:
        "Automatically categorize and tag your summaries. Build a searchable knowledge base of all your notes.",
      features: [
        { label: "Auto-tagging", icon: Tag },
        { label: "Smart folders", icon: FolderTree },
        { label: "Full-text search", icon: Search },
      ],
    },
    {
      title: "Collaborative Features",
      description:
        "Share summaries with team members, get feedback, and collaborate in real-time.",
      features: [
        { label: "Team workspaces", icon: Users },
        { label: "Comments & feedback", icon: MessageSquare },
        { label: "Version history", icon: History },
      ],
    },
    {
      title: "Export & Integration",
      description:
        "Export summaries in multiple formats and integrate with your favorite productivity tools.",
      features: [
        { label: "Multiple formats", icon: FileOutput },
        { label: "API access", icon: Link2 },
        { label: "Webhook support", icon: Webhook },
      ],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section
      id="how-it-works"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-mauve-shadow-50 dark:bg-mauve-shadow-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-powder-petal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How Briefly Works
          </h2>
          <p className="text-xl text-mauve-shadow-600 dark:text-mauve-shadow-400 max-w-2xl mx-auto">
            Discover our powerful features that make note summarization
            effortless
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Column - Slideshow */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-background border border-mauve-shadow-200 dark:border-mauve-shadow-800">
              <div className="aspect-video bg-linear-to-br from-powder-petal-500/10 to-frosted-mint-500/10 p-8 flex flex-col justify-between min-h-96">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {slides[currentSlide].title}
                  </h3>
                  <p className="text-lg text-mauve-shadow-600 dark:text-mauve-shadow-400 mb-8">
                    {slides[currentSlide].description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {slides[currentSlide].features.map((feature, idx) => {
                      const Icon = feature.icon;
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + idx * 0.1 }}
                          className="p-4 rounded-lg bg-powder-petal-50 dark:bg-powder-petal-950 border border-powder-petal-200 dark:border-powder-petal-800"
                        >
                          <div className="flex flex-col items-center justify-center gap-4 h-full">
                            <motion.p
                              className="text-sm font-semibold text-powder-petal-700 dark:text-powder-petal-300 text-center leading-snug"
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                delay: 0.2 + idx * 0.1,
                                duration: 0.4,
                              }}
                            >
                              {feature.label}
                            </motion.p>
                            <motion.span
                              className="p-3 rounded-xl bg-powder-petal-100 dark:bg-powder-petal-900 text-powder-petal-600 dark:text-powder-petal-200"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                delay: 0.3 + idx * 0.1,
                                duration: 0.4,
                                type: "spring",
                                stiffness: 100,
                              }}
                              whileHover={{ scale: 1.15, rotate: 5 }}
                            >
                              <Icon className="w-10 h-10" />
                            </motion.span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </div>

              {/* Navigation Controls */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                <div className="flex gap-2">
                  {slides.map((_, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentSlide
                          ? "w-8 bg-powder-petal-500"
                          : "w-2 bg-mauve-shadow-300 dark:bg-mauve-shadow-600"
                      }`}
                      whileHover={{ scale: 1.2 }}
                    />
                  ))}
                </div>
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={prevSlide}
                    className="p-2 rounded-lg bg-background border border-mauve-shadow-200 dark:border-mauve-shadow-800 hover:bg-powder-petal-100 dark:hover:bg-powder-petal-900 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={nextSlide}
                    className="p-2 rounded-lg bg-background border border-mauve-shadow-200 dark:border-mauve-shadow-800 hover:bg-powder-petal-100 dark:hover:bg-powder-petal-900 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Chat Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="hidden lg:block"
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
                className="p-4 bg-background border border-mauve-shadow-200 dark:border-mauve-shadow-800 min-h-96 relative z-10 space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex justify-end">
                    <div className="max-w-xs bg-powder-petal-500 text-white rounded-2xl p-4 text-sm">
                      Can you summarize this research paper for me?
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="max-w-xs bg-mauve-shadow-100 dark:bg-mauve-shadow-800 rounded-2xl p-4 text-sm">
                      <p className="font-semibold mb-2">Summary Generated:</p>
                      <p className="text-xs leading-relaxed">
                        This research paper discusses quantum computing
                        applications in cryptography, showing a 40% improvement
                        in processing speed and enhanced security protocols...
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="max-w-xs bg-powder-petal-500 text-white rounded-2xl p-4 text-sm">
                      Perfect! Can you export this as PDF?
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="max-w-xs bg-mauve-shadow-100 dark:bg-mauve-shadow-800 rounded-2xl p-4 text-sm">
                      <p className="font-semibold mb-2">✓ PDF generated</p>
                      <p className="text-xs">
                        Your summary has been exported and is ready to download
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
      `}</style>
    </section>
  );
}
