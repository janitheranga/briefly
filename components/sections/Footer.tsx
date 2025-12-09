"use client";

import { motion } from "framer-motion";
import { Mail, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: ["Features", "Pricing", "Security", "Roadmap"],
    Company: ["About Us", "Blog", "Careers", "Contact"],
    Resources: ["Documentation", "API Docs", "Help Center", "Community"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"],
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@briefly.app", label: "Email" },
  ];

  return (
    <footer className="bg-background border-t border-mauve-shadow-200 dark:border-mauve-shadow-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl font-bold bg-linear-to-r from-powder-petal-500 to-frosted-mint-500 bg-clip-text text-transparent mb-4">
              Briefly
            </div>
            <p className="text-sm text-mauve-shadow-600 dark:text-mauve-shadow-400 mb-6">
              Transform your notes into concise summaries with AI-powered
              intelligence.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg bg-mauve-shadow-100 dark:bg-mauve-shadow-800 hover:bg-powder-petal-100 dark:hover:bg-powder-petal-900 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-foreground" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map((group, index) => (
            <motion.div
              key={group[0]}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-foreground mb-4">{group[0]}</h3>
              <ul className="space-y-3">
                {group[1].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-mauve-shadow-600 dark:text-mauve-shadow-400 hover:text-powder-petal-500 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-linear-to-r from-powder-petal-500/10 to-frosted-mint-500/10 border border-mauve-shadow-200 dark:border-mauve-shadow-800 rounded-2xl p-8 mb-16"
        >
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Stay Updated
            </h3>
            <p className="text-mauve-shadow-600 dark:text-mauve-shadow-400 mb-6">
              Get the latest updates and tips on note summarization delivered to
              your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-background border border-mauve-shadow-200 dark:border-mauve-shadow-800 focus:outline-none focus:ring-2 focus:ring-powder-petal-500 transition-all duration-200"
              />
              <button className="px-6 py-3 bg-powder-petal-500 text-white font-medium rounded-lg hover:bg-powder-petal-600 transition-colors duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-mauve-shadow-200 dark:border-mauve-shadow-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-mauve-shadow-600 dark:text-mauve-shadow-400">
              © {currentYear} Briefly. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-mauve-shadow-600 dark:text-mauve-shadow-400 hover:text-powder-petal-500 transition-colors"
              >
                Status
              </a>
              <a
                href="#"
                className="text-sm text-mauve-shadow-600 dark:text-mauve-shadow-400 hover:text-powder-petal-500 transition-colors"
              >
                Accessibility
              </a>
              <a
                href="#"
                className="text-sm text-mauve-shadow-600 dark:text-mauve-shadow-400 hover:text-powder-petal-500 transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
