// lib/logger.ts
import { logError, logInfo, logWarn } from './v1';

export const logErrorLocal = (error: any) => {
  console.error("Logged Error:", error);
  // You can expand this function to log errors to an external service if needed
};

// Example usage
logInfo('Logger initialized');
