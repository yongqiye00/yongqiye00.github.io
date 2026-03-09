import Link from "next/link";
import { Github, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { featureConfig } from "@/config/features";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-serif text-slate-900 mb-4">
              Yeliduosi Xiaokaiti
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
              Exploring the intersection of computational imaging, computer vision,
              and artificial intelligence. Passionate about novel camera systems and
              image processing algorithms.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-slate-600 hover:text-indigo-500 text-sm transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#publications"
                  className="text-slate-600 hover:text-indigo-500 text-sm transition-colors"
                >
                  Publications
                </a>
              </li>
              {featureConfig.news && (
                <li>
                  <a
                    href="#news"
                    className="text-slate-600 hover:text-indigo-500 text-sm transition-colors"
                  >
                    News & Updates
                  </a>
                </li>
              )}
              {featureConfig.contact && (
                <li>
                  <a
                    href="#contact"
                    className="text-slate-600 hover:text-indigo-500 text-sm transition-colors"
                  >
                    Contact
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4">
              Connect
            </h4>
            <div className="flex space-x-3">
              <Button
                variant="outline"
                size="icon"
                asChild
                className="h-9 w-9 border-slate-200"
              >
                <a
                  href="https://github.com/yongqiye00"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="h-9 w-9 border-slate-200"
              >
                <a
                  href="mailto:your.email@example.com"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="h-9 w-9 border-slate-200"
              >
                <a
                  href="https://scholar.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Scholar"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm">
              © {currentYear} Yeliduosi Xiaokaiti. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm mt-2 sm:mt-0">
              Built with{" "}
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-500 transition-colors"
              >
                Next.js
              </a>{" "}
              &{" "}
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-500 transition-colors"
              >
                Tailwind CSS
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;