export function MonthNumber(month) {
  if (month.toLowerCase() === "jan") return 0;
  if (month.toLowerCase() === "feb") return 1;
  if (month.toLowerCase() === "mar") return 2;
  if (month.toLowerCase() === "apr") return 3;
  if (month.toLowerCase() === "may") return 4;
  if (month.toLowerCase() === "jun") return 5;
  if (month.toLowerCase() === "jul") return 6;
  if (month.toLowerCase() === "aug") return 7;
  if (month.toLowerCase() === "sep") return 8;
  if (month.toLowerCase() === "oct") return 9;
  if (month.toLowerCase() === "nov") return 10;
  if (month.toLowerCase() === "dec") return 11;
  return 10;
}