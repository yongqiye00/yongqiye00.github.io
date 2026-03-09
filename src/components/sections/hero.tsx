"use client";

import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, ExternalLink, Building, Github } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  fadeIn,
  slideUp,
  scaleIn,
  staggerChildren,
  staggerItem,
  hoverLift
} from "@/lib/animations";
import { featureConfig } from "@/config/features";

const Hero = () => {
  return (
    <section id="about" className="bg-gradient-to-br from-slate-50 to-white px-6 sm:px-8 lg:px-10 pt-12 pb-16 lg:pt-16 lg:pb-18 border-b border-slate-200">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate="show"
        variants={staggerChildren}
      >
        {/* Two Column Layout - 60/40 split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          {/* Left Column - Text Content (60%) */}
          <motion.div
            className="lg:col-span-8 space-y-8"
            variants={staggerChildren}
          >
            {/* Name and Title */}
            <motion.div className="space-y-4" variants={fadeIn}>
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl font-serif font-semibold text-slate-900 leading-tight"
                variants={slideUp}
              >
                {profile.name}
              </motion.h1>
              <motion.h2
                className="text-2xl sm:text-3xl text-slate-600 font-normal leading-relaxed"
                variants={slideUp}
                transition={{ ...slideUp.transition, delay: 0.1 }}
              >
                {profile.role}
              </motion.h2>
              {/* Affiliation metadata */}
              <motion.div
                className="text-base text-slate-500"
                variants={slideUp}
                transition={{ ...slideUp.transition, delay: 0.15 }}
              >
                {profile.organizations.map((org, index) => (
                  <span key={org.name}>
                    <a
                      href={org.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-indigo-500 transition-colors"
                    >
                      {org.name}
                    </a>
                    {index < profile.organizations.length - 1 && (
                      <span className="text-slate-300 mx-2">·</span>
                    )}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Bio */}
            <motion.p
              className="text-lg text-slate-700 leading-[1.7] max-w-3xl"
              variants={slideUp}
              transition={{ ...slideUp.transition, delay: 0.2 }}
            >
              {(() => {
                const bio = profile.bio;
                const parts = [];
                let remaining = bio;

                // Define replacements with order to handle longer matches first
                const replacements = [
                  { text: 'Camera Intelligence Lab', url: 'https://camera.pku.edu.cn/' },
                  { text: 'Boxin Shi', url: 'https://camera.pku.edu.cn/team' },
                  { text: 'Peking University', url: 'https://www.pku.edu.cn/' },
                ];

                for (const { text, url } of replacements) {
                  const index = remaining.indexOf(text);
                  if (index !== -1) {
                    if (index > 0) {
                      parts.push(remaining.slice(0, index));
                    }
                    parts.push(
                      <a
                        key={text}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        {text}
                      </a>
                    );
                    remaining = remaining.slice(index + text.length);
                  }
                }

                if (remaining) {
                  parts.push(remaining);
                }

                return parts;
              })()}
            </motion.p>

            {/* Research Interests */}
            <motion.div
              variants={scaleIn}
              transition={{ ...scaleIn.transition, delay: 0.25 }}
            >
              <p className="text-base text-slate-600">
                <span className="text-sm text-slate-500 mr-2">Research interests:</span>
                {profile.interests.length > 1
                  ? profile.interests.slice(0, -1).join(", ") + ", and " + profile.interests[profile.interests.length - 1]
                  : profile.interests[0]
                }.
              </p>
            </motion.div>

            {/* Contact and Social Links */}
            <motion.div
              className="flex flex-wrap items-center gap-3"
              variants={scaleIn}
              transition={{ ...scaleIn.transition, delay: 0.3 }}
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button variant="outline" asChild size="default" className="h-10 px-4 text-sm rounded-xl">
                  <a href={`mailto:${profile.email}`} className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </a>
                </Button>
              </motion.div>

              {profile.social_links?.github && (
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="outline" asChild size="default" className="h-10 px-4 text-sm rounded-xl">
                    <a
                      href={profile.social_links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </motion.div>
              )}

              {profile.social_links?.scholar && (
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="outline" asChild size="default" className="h-10 px-4 text-sm rounded-xl">
                    <a
                      href={profile.social_links.scholar}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Google Scholar
                    </a>
                  </Button>
                </motion.div>
              )}
            </motion.div>

            {/* Call to Action */}
            {(featureConfig.news || featureConfig.contact) && (
              <motion.div
                className="pt-2"
                variants={fadeIn}
                transition={{ ...fadeIn.transition, delay: 0.35 }}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="outline" asChild size="sm" className="h-9 px-4 text-sm rounded-xl">
                      <a href="#publications">
                        View Publications
                      </a>
                    </Button>
                  </motion.div>
                  {featureConfig.news && (
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button variant="ghost" asChild size="sm" className="h-9 px-4 text-sm rounded-xl">
                        <a href="#news">
                          Latest News
                        </a>
                      </Button>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Right Column - Portrait (40%) */}
          <motion.div
            className="lg:col-span-4 flex justify-center lg:justify-end"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className="relative w-[280px] h-[340px] sm:w-[300px] sm:h-[360px]"
                whileHover={hoverLift}
              >
                <div className="absolute inset-0 bg-white rounded-[20px] shadow-md overflow-hidden border border-slate-200/50">
                  <Image
                    src="/portrait.png"
                    alt={profile.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
