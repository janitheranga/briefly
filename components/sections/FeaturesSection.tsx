"use client";

import { motion } from "framer-motion";
import { Brain, Zap, Lock, Smartphone, BarChart3, Share2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

export function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description:
        "Advanced machine learning algorithms understand context and extract key points automatically.",
      color: "from-powder-petal-500 to-powder-petal-600",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Get summaries in seconds, not hours. Process multiple documents simultaneously.",
      color: "from-frosted-mint-500 to-frosted-mint-600",
    },
    {
      icon: Lock,
      title: "Secure & Private",
      description:
        "Enterprise-grade encryption ensures your data is always protected and private.",
      color: "from-muted-teal-500 to-muted-teal-600",
    },
    {
      icon: Smartphone,
      title: "Works Anywhere",
      description:
        "Access Briefly on desktop, tablet, or mobile. Sync across all your devices.",
      color: "from-jungle-teal-500 to-jungle-teal-600",
    },
    {
      icon: BarChart3,
      title: "Smart Analytics",
      description:
        "Track productivity metrics and get insights on your summarization patterns.",
      color: "from-powder-petal-500 to-frosted-mint-500",
    },
    {
      icon: Share2,
      title: "Easy Integration",
      description:
        "Seamlessly integrate with your favorite tools and services via API.",
      color: "from-muted-teal-500 to-jungle-teal-500",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-frosted-mint-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
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
            Powerful Features
          </h2>
          <p className="text-xl text-mauve-shadow-600 dark:text-mauve-shadow-400 max-w-2xl mx-auto">
            Everything you need to summarize, organize, and master your notes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 rounded-2xl border-mauve-shadow-200 dark:border-mauve-shadow-800">
                  <CardHeader>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 rounded-xl bg-linear-to-r ${feature.color} flex items-center justify-center mb-4 text-white`}
                    >
                      <Icon className="w-8 h-8" />
                    </motion.div>
                    <CardTitle className="text-xl text-foreground">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-base text-mauve-shadow-600 dark:text-mauve-shadow-400">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
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
