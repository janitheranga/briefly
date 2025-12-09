"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("general");

  const faqData = {
    general: [
      {
        question: "What is Briefly?",
        answer:
          "Briefly is an AI-powered note summarization platform that transforms lengthy notes into concise, actionable summaries in seconds. Perfect for students, professionals, and busy individuals.",
      },
      {
        question: "How does Briefly work?",
        answer:
          "Simply upload or paste your notes, and our advanced AI algorithms instantly analyze the content, identify key points, and generate a clear, concise summary tailored to your needs.",
      },
      {
        question: "Is my data secure?",
        answer:
          "Yes, we use enterprise-grade encryption and follow industry best practices to ensure your data is always protected. All data is encrypted in transit and at rest.",
      },
      {
        question: "What languages are supported?",
        answer:
          "Briefly supports summarization in 50+ languages, including English, Spanish, French, German, Chinese, Japanese, and many more.",
      },
    ],
    pricing: [
      {
        question: "What are the pricing plans?",
        answer:
          "We offer three plans: Free (5 summaries/month), Pro ($9.99/month, unlimited summaries), and Enterprise (custom pricing for large teams).",
      },
      {
        question: "Is there a free trial?",
        answer:
          "Yes! The Free plan includes 5 summaries per month with full access to all basic features, so you can try Briefly risk-free.",
      },
      {
        question: "Can I cancel anytime?",
        answer:
          "Absolutely. You can cancel your subscription at any time with no hidden fees or penalties. Your access will continue until the end of your billing cycle.",
      },
      {
        question: "Do you offer discounts for annual billing?",
        answer:
          "Yes, annual subscriptions come with 20% off. If you need a custom quote, our enterprise team is happy to help.",
      },
    ],
    features: [
      {
        question: "What file formats are supported?",
        answer:
          "We support PDF, DOCX, TXT, PPTX, and direct text input. You can also paste content directly from web pages or applications.",
      },
      {
        question: "Can I customize summary length?",
        answer:
          "Yes, you can choose between short (1-2 paragraphs), medium (3-5 paragraphs), or long (full-length) summaries, or specify a custom length.",
      },
      {
        question: "Can I export summaries?",
        answer:
          "Absolutely. You can export in PDF, DOCX, TXT, or Markdown formats, and share directly with team members or integrate via API.",
      },
      {
        question: "Does Briefly support collaboration?",
        answer:
          "Yes, with our Pro and Enterprise plans you can create team workspaces, share summaries, add comments, and track version history.",
      },
    ],
    integrations: [
      {
        question: "What integrations are available?",
        answer:
          "We integrate with Google Drive, Dropbox, Slack, Microsoft Teams, Zapier, and more. Custom integrations available for Enterprise plans.",
      },
      {
        question: "Is there an API?",
        answer:
          "Yes, our REST API allows you to integrate Briefly into your own applications. Full documentation and SDKs available.",
      },
      {
        question: "Can I use Briefly with my existing tools?",
        answer:
          "Yes, Briefly works seamlessly with productivity tools like Notion, Evernote, OneNote, and many others through our integrations.",
      },
      {
        question: "Do you offer webhooks?",
        answer:
          "Yes, Enterprise users can set up webhooks to automate workflows and trigger actions when summaries are generated.",
      },
    ],
  };

  const categories = [
    { id: "general", label: "General" },
    { id: "pricing", label: "Pricing" },
    { id: "features", label: "Features" },
    { id: "integrations", label: "Integrations" },
  ];

  return (
    <section
      id="faq"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-muted-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-mauve-shadow-600 dark:text-mauve-shadow-400">
            Find answers to common questions about Briefly
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === category.id
                  ? "bg-powder-petal-500 text-white shadow-lg"
                  : "bg-mauve-shadow-100 dark:bg-mauve-shadow-800 text-foreground hover:bg-mauve-shadow-200 dark:hover:bg-mauve-shadow-700"
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          key={activeCategory}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqData[activeCategory as keyof typeof faqData].map(
              (item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border border-mauve-shadow-200 dark:border-mauve-shadow-800 rounded-xl overflow-hidden hover:border-powder-petal-500 transition-colors duration-300"
                  >
                    <AccordionTrigger className="hover:bg-powder-petal-50 dark:hover:bg-powder-petal-950 px-6">
                      <span className="text-left font-semibold text-foreground">
                        {item.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-mauve-shadow-600 dark:text-mauve-shadow-400 border-t border-mauve-shadow-200 dark:border-mauve-shadow-800">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              )
            )}
          </Accordion>
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
