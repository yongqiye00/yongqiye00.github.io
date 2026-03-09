"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { slideDown, slideUp } from "@/lib/animations";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { smoothScrollTo } = useSmoothScroll();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Core navigation items - always visible
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Publications", href: "#publications" },
    { label: "Projects", href: "#projects" },
    { label: "CV", href: "#cv" },
  ];

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    // For anchor links (starting with #)
    if (href.startsWith('#')) {
      const elementId = href.substring(1); // Remove # from href

      // If not on homepage, navigate to homepage with hash first
      if (pathname !== '/') {
        e.preventDefault();
        router.push(`/${href}`);
        setIsOpen(false);
        return;
      }

      // On homepage, prevent default and smooth scroll
      e.preventDefault();
      smoothScrollTo(elementId);
    }
    setIsOpen(false); // Close mobile menu after click
  };

  return (
    <motion.nav
      initial={slideDown.initial}
      animate={slideDown.animate}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name - Short version */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/"
              className="text-lg font-serif font-semibold text-slate-900 hover:text-indigo-500 transition-colors"
            >
              Y. Xiaokaiti
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(item.href, e)}
                className="px-4 py-2 text-sm text-slate-600 hover:text-indigo-500 hover:bg-slate-50 rounded-lg transition-all duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-600 hover:text-indigo-500"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={slideUp.initial}
              animate={slideUp.animate}
              exit={slideUp.initial}
              className="md:hidden bg-white border-t border-slate-200"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(item.href, e)}
                    className="block px-4 py-2 text-slate-600 hover:text-indigo-500 hover:bg-slate-50 rounded-lg transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
