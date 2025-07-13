import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// prisma to js

export function convert<T>(value: T) {
  return JSON.parse(JSON.stringify(value));
}