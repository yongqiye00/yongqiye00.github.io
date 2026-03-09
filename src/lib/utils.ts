import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

type Mods = Record<string, boolean | string | undefined>;

export type { ClassValue, Mods };

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}