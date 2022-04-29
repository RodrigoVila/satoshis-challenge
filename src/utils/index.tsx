export const parseDate = (dt: string): string => {
  const date = Date.parse(dt);
  const parsedDate = new Date(date).toDateString();
  return parsedDate.slice(4, 15);
};
