"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Features", "How It Works", "Pricing", "Reviews", "FAQ"];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 dark:bg-background/80 backdrop-blur-md border-b border-mauve-shadow-200 dark:border-mauve-shadow-800 shadow-lg"
          : "bg-background/50 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-2xl font-bold bg-linear-to-r from-powder-petal-500 to-frosted-mint-500 bg-clip-text text-transparent"
          >
            Briefly
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="text-foreground hover:text-powder-petal-500 transition-colors duration-200 text-sm font-medium"
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Button variant="default" size="md">
                Get Started
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-powder-petal-100 dark:hover:bg-powder-petal-900 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 pb-4 border-t border-mauve-shadow-200 dark:border-mauve-shadow-800"
          >
            <div className="flex flex-col gap-4 pt-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                  className="text-foreground hover:text-powder-petal-500 transition-colors duration-200 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Button variant="default" size="md" className="w-full mt-2">
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
