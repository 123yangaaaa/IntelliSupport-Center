export function getEnvVar(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
}

export const env = {
  clerk: {
    publishableKey: getEnvVar('NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY'),
    secretKey: getEnvVar('CLERK_SECRET_KEY'),
  },
  site: {
    url: getEnvVar('NEXT_PUBLIC_SITE_URL'),
  },
} as const;