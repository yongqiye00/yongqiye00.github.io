/**
 * Feature Toggle Configuration
 * Set features to true to enable, false to disable
 */
export const featureConfig = {
  // Blog section and page
  blog: false,

  // News section on homepage
  news: false,

  // Contact section in footer and navigation
  contact: false,
} as const;

export type FeatureConfig = typeof featureConfig;
