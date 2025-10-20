export const ACCESS_TYPES = ['Panel', 'Database', 'Ftp', 'ClientFtp'] as const;
export type AccessType = (typeof ACCESS_TYPES)[number];
export const ACCESS_TYPES_SET = new Set<string>(
  ACCESS_TYPES as readonly string[],
);
