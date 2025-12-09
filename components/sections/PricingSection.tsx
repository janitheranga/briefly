"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

const pricingTiers = [
  {
    name: "Starter",
    price: "$0",
    cadence: "forever",
    description:
      "Perfect to try Briefly with your personal notes and meetings.",
    features: [
      "Up to 10 documents / month",
      "AI summaries with key bullets",
      "Basic export (PDF, TXT)",
      "Light & dark themes",
    ],
    cta: "Start for free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$18",
    cadence: "per user / month",
    description:
      "For power users who need faster, deeper summaries and automation.",
    features: [
      "Unlimited documents",
      "Advanced tone & length controls",
      "Automated tagging & folders",
      "Email + Slack export",
      "Priority support",
    ],
    cta: "Upgrade to Pro",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$39",
    cadence: "per user / month",
    description:
      "Best for teams collaborating on research, customer calls, or projects.",
    features: [
      "Everything in Pro",
      "Shared workspaces",
      "Role-based access",
      "Comments & version history",
      "Admin analytics & SSO",
    ],
    cta: "Talk to sales",
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background text-foreground relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-10 w-72 h-72 bg-frosted-mint-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-powder-petal-500/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="inline-flex items-center rounded-full px-4 py-1 text-sm bg-powder-petal-100 dark:bg-powder-petal-900 text-powder-petal-700 dark:text-powder-petal-200 border border-powder-petal-200 dark:border-powder-petal-800 mb-4">
            Pricing that scales with you
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Find your perfect plan
          </h2>
          <p className="text-lg text-mauve-shadow-600 dark:text-mauve-shadow-400 max-w-2xl mx-auto">
            Start free, then upgrade when you are ready. All plans include
            secure storage, instant summaries, and smooth collaboration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pricingTiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`relative rounded-2xl border shadow-lg backdrop-blur-sm bg-linear-to-b from-background/90 to-background/70 cursor-pointer ${
                tier.highlighted
                  ? "border-powder-petal-400 dark:border-powder-petal-500 shadow-powder-petal-200/40 dark:shadow-powder-petal-900/60"
                  : "border-mauve-shadow-200 dark:border-mauve-shadow-800"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-powder-petal-500 text-white text-xs font-semibold shadow">
                  Most popular
                </div>
              )}

              <div className="p-6 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold">{tier.name}</h3>
                  <p className="text-mauve-shadow-600 dark:text-mauve-shadow-400 text-sm leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-sm text-mauve-shadow-600 dark:text-mauve-shadow-400">
                      {tier.cadence}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  {tier.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 text-sm text-foreground"
                    >
                      <span className="mt-0.5 rounded-full p-1 bg-powder-petal-100 dark:bg-powder-petal-900 text-powder-petal-600 dark:text-powder-petal-200">
                        <Check className="w-4 h-4" />
                      </span>
                      <span className="text-mauve-shadow-700 dark:text-mauve-shadow-200 leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  variant={tier.highlighted ? "default" : "secondary"}
                  className={`w-full justify-center ${
                    tier.highlighted
                      ? "bg-powder-petal-500 hover:bg-powder-petal-600 text-white"
                      : "border border-mauve-shadow-200 dark:border-mauve-shadow-700"
                  }`}
                >
                  {tier.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
