import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const imagePath = (path: string) => {
  return process.env.NODE_ENV === 'production'
    ? `/Lamech-CorporateSite202601${path}`
    : path
}
