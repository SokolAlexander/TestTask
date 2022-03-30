export const getMostPopular = (stats: {[name: string]: number}) => {
  const entries = Object.entries(stats);
  if (!entries.length) {
    return [];
  }
  return entries.reduce((acc, entry) => {
    if (entry[1] > acc[1]) {
      return entry;
    }

    return acc;
  }, entries[0]);
};
