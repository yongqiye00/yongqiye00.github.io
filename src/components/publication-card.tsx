"use client";

import type { Publication } from "@/types";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Github, Calendar, FileImage } from "lucide-react";
import { motion } from "framer-motion";
import { scrollAnimationProps, hoverLift } from "@/lib/animations";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface PublicationCardProps {
  publication: Publication;
  featured?: boolean;
}

const PublicationCard = ({ publication, featured = false, index = 0 }: PublicationCardProps & { index?: number }) => {
  const [aspectRatio, setAspectRatio] = useState<number | undefined>();

  const formatDate = (year: number) => {
    return year.toString();
  };



  const getVenueAbbreviation = (venue: string) => {
    const abbreviations: Record<string, string> = {
      "Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)": "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
      "Proceedings of the IEEE/CVF International Conference on Computer Vision": "IEEE/CVF International Conference on Computer Vision (ICCV)",
      "Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition": "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
      "Proceedings of the European Conference on Computer Vision": "European Conference on Computer Vision (ECCV)",
      "Advances in Neural Information Processing Systems": "Advances in Neural Information Processing Systems (NeurIPS)",
      "International Conference on Machine Learning": "International Conference on Machine Learning (ICML)",
      "Association for Computational Linguistics": "Association for Computational Linguistics (ACL)",
      "International Conference on Learning Representations": "International Conference on Learning Representations (ICLR)",
    };
    return abbreviations[venue] || venue;
  };

  const getStatusVariant = (status?: string) => {
    switch (status) {
      case 'published':
        return 'default';
      case 'preprint':
        return 'secondary';
      case 'in-press':
        return 'warning';
      default:
        return 'outline';
    }
  };

  const getTypeVariant = (type: string) => {
    switch (type) {
      case 'conference':
        return 'default';
      case 'journal':
        return 'success';
      case 'workshop':
        return 'secondary';
      case 'thesis':
        return 'outline';
      default:
        return 'outline';
    }
  };

  const hasThumbnail = publication.image && publication.image.length > 0;
  const thumbnailTarget = publication.pdf_url || publication.project_url;

  return (
    <motion.div
      {...scrollAnimationProps(index * 0.1)}
      whileHover={hoverLift}
    >
      <Card
        className={`
          p-6 hover:shadow-md transition-all duration-300 border-slate-200
          ${featured ? 'ring-2 ring-indigo-50 bg-indigo-50/20' : 'bg-white'}
        `}
      >
        <div className="flex gap-8">
          {/* Left Column - Thumbnail */}
          <div className="flex-shrink-0 flex items-center">
            {hasThumbnail ? (
              thumbnailTarget ? (
                <Link
                  href={thumbnailTarget}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div
                    className="relative w-[290px] max-h-[200px] rounded-xl overflow-hidden border border-slate-200 bg-slate-50 group-hover:border-slate-300 transition-colors"
                    style={aspectRatio ? { aspectRatio } : { aspectRatio: '4/3' }}
                  >
                    <Image
                      src={publication.image!}
                      alt={publication.title}
                      fill
                      className="object-contain"
                      onLoad={(e) => {
                        const img = e.currentTarget;
                        setAspectRatio(img.naturalWidth / img.naturalHeight);
                      }}
                    />
                  </div>
                </Link>
              ) : (
                <div className="block">
                  <div
                    className="relative w-[290px] max-h-[200px] rounded-xl overflow-hidden border border-slate-200 bg-slate-50 transition-colors"
                    style={aspectRatio ? { aspectRatio } : { aspectRatio: '4/3' }}
                  >
                    <Image
                      src={publication.image!}
                      alt={publication.title}
                      fill
                      className="object-contain"
                      onLoad={(e) => {
                        const img = e.currentTarget;
                        setAspectRatio(img.naturalWidth / img.naturalHeight);
                      }}
                    />
                  </div>
                </div>
              )
            ) : (
              <div className="relative w-[290px] aspect-[4/3] rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center">
                <FileImage className="h-10 w-10 text-slate-300" />
              </div>
            )}
          </div>

          {/* Right Column - Content */}
          <div className="flex-1 min-w-0 flex flex-col">
            {/* Title */}
            <h3 className="text-2xl font-serif font-semibold text-slate-900 leading-tight mb-3 max-w-[95%]">
              {publication.title}
            </h3>

            {/* Authors */}
            <div className="flex flex-wrap items-center text-base text-slate-700 mb-3">
              {publication.authors.map((author, index) => (
                <span key={`author-${index}`} className="inline">
                  {author.is_highlight ? (
                    <span key={`name-${index}`} className="font-semibold text-slate-900">
                      {author.name}
                    </span>
                  ) : (
                    <span key={`name-${index}`}>{author.name}</span>
                  )}
                  {author.equal_contribution && <span className="text-slate-500 ml-0.5">#</span>}
                  {index < publication.authors.length - 1 && (
                    <span key={`sep-${index}`} className="text-slate-400 mr-0.5">,</span>
                  )}
                </span>
              ))}
            </div>

            {/* Venue and Year */}
            <div className="flex flex-wrap items-center gap-3 text-sm mb-1">
              <span className="text-slate-700 font-medium">
                {getVenueAbbreviation(publication.venue)}
              </span>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-slate-400" />
                <span className="text-slate-600">
                  {formatDate(publication.year)}
                </span>
              </div>
            </div>

            {/* Tags - Only show 2-3 most relevant */}
            {publication.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2 mb-4">
                {publication.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs bg-slate-50 border-slate-200 text-slate-600">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* Action Links - Unified lightweight style */}
            <div className="flex flex-wrap items-center gap-1 text-sm text-slate-600 pt-2 border-t border-slate-100">
              {publication.pdf_url && (
                <a
                  href={publication.pdf_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-indigo-500 transition-colors"
                >
                  <FileText className="h-3.5 w-3.5 mr-1" />
                  PDF
                </a>
              )}
              {publication.pdf_url && publication.code_url && (
                <span className="text-slate-300 mx-1">·</span>
              )}
              {publication.code_url && (
                <a
                  href={publication.code_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-indigo-500 transition-colors"
                >
                  <Github className="h-3.5 w-3.5 mr-1" />
                  Code
                </a>
              )}
              {publication.project_url && (
                <>
                  <span className="text-slate-300 mx-1">·</span>
                  <a
                    href={publication.project_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-indigo-500 transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5 mr-1" />
                    Project
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default PublicationCard;
