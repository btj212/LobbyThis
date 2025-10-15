import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(cents: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(cents / 100)
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function getTierWeight(tier: string): number {
  const weights = process.env.TIER_WEIGHTS?.split(',').reduce((acc, pair) => {
    const [amount, weight] = pair.split(':')
    acc[amount] = parseInt(weight)
    return acc
  }, {} as Record<string, number>) || { '5': 1, '10': 2, '20': 5, '100': 20 }
  
  const tierAmount = tier.replace('TIER_', '')
  return weights[tierAmount] || 1
}

export function getTierAmount(tier: string): number {
  return parseInt(tier.replace('TIER_', ''))
}

