"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";

export function ReviewsSection() {
  const reviews = [
    {
      name: "Sarah Johnson",
      position: "Graduate Student",
      content:
        "Briefly has been a game-changer for my research. I can now summarize papers in minutes instead of hours. Highly recommended!",
      rating: 5,
      avatar: "👩‍🎓",
      color: "from-powder-petal-500 to-powder-petal-600",
    },
    {
      name: "Michael Chen",
      position: "Product Manager",
      content:
        "The AI summarization is incredibly accurate. I use Briefly daily for meeting notes and it has saved me countless hours.",
      rating: 5,
      avatar: "👨‍💼",
      color: "from-frosted-mint-500 to-frosted-mint-600",
    },
    {
      name: "Emily Rodriguez",
      position: "Content Creator",
      content:
        "Perfect for content creators like me. I can quickly summarize long-form content and repurpose it. Worth every penny!",
      rating: 5,
      avatar: "👩‍💻",
      color: "from-muted-teal-500 to-muted-teal-600",
    },
    {
      name: "David Park",
      position: "Software Engineer",
      content:
        "Clean interface, powerful features, and amazing support team. Briefly is exactly what I was looking for in a note app.",
      rating: 5,
      avatar: "👨‍🔧",
      color: "from-jungle-teal-500 to-jungle-teal-600",
    },
    {
      name: "Jessica Williams",
      position: "Executive Assistant",
      content:
        "Our team started using Briefly for executive briefing notes. The summaries are concise and always capture the key points.",
      rating: 5,
      avatar: "👩‍💼",
      color: "from-powder-petal-500 to-frosted-mint-500",
    },
    {
      name: "Alex Thompson",
      position: "Teacher",
      content:
        "My students love using Briefly to study. It helps them focus on what matters most. Great educational tool!",
      rating: 5,
      avatar: "👨‍🏫",
      color: "from-muted-teal-500 to-jungle-teal-500",
    },
  ];

  return (
    <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 bg-mauve-shadow-50 dark:bg-mauve-shadow-950 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-jungle-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
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
            Loved by Our Users
          </h2>
          <p className="text-xl text-mauve-shadow-600 dark:text-mauve-shadow-400 max-w-2xl mx-auto">
            See what our happy users have to say about Briefly
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 rounded-2xl border-mauve-shadow-200 dark:border-mauve-shadow-800 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-full bg-linear-to-r ${review.color} flex items-center justify-center text-2xl`}
                      >
                        {review.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">
                          {review.name}
                        </p>
                        <p className="text-xs text-mauve-shadow-600 dark:text-mauve-shadow-400">
                          {review.position}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Star className="w-4 h-4 fill-powder-petal-500 text-powder-petal-500" />
                      </motion.div>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-mauve-shadow-600 dark:text-mauve-shadow-400 leading-relaxed">
                    "{review.content}"
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Reviews Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <p className="text-4xl font-bold text-powder-petal-500 mb-2">
                4.9★
              </p>
              <p className="text-mauve-shadow-600 dark:text-mauve-shadow-400">
                Average Rating
              </p>
            </div>
            <div>
              <p className="text-4xl font-bold text-frosted-mint-500 mb-2">
                10K+
              </p>
              <p className="text-mauve-shadow-600 dark:text-mauve-shadow-400">
                Happy Users
              </p>
            </div>
            <div>
              <p className="text-4xl font-bold text-muted-teal-500 mb-2">1M+</p>
              <p className="text-mauve-shadow-600 dark:text-mauve-shadow-400">
                Notes Summarized
              </p>
            </div>
          </div>
        </motion.div>
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
