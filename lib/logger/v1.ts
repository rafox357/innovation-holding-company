export const logError = (error: unknown) => {
  console.error('[Error]:', error);
};

export const logInfo = (message: string, ...args: unknown[]) => {
  console.log('[Info]:', message, ...args);
};

export const logWarn = (message: string, ...args: unknown[]) => {
  console.warn('[Warn]:', message, ...args);
};