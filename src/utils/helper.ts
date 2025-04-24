export const getItemsPerPageForWidth = (width: number): number => {
  if (width >= 2600) return 13;
  if (width >= 2400) return 12;
  if (width >= 2200) return 11;
  if (width >= 2000) return 10;
  if (width >= 1800) return 9;
  if (width >= 1600) return 8;
  if (width >= 1400) return 7;
  if (width >= 1200) return 6;
  if (width >= 1000) return 5;
  if (width >= 800) return 4;
  if (width >= 600) return 3;
  return 2;
};
