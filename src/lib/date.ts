/**
 * Formats an ISO date string or Date object to Norwegian human-readable format.
 * e.g., "13. april 2026"
 */
export function formatNorwegianDate(date: string | Date): string {
  const parsed = typeof date === "string" ? new Date(date) : date;
  if (isNaN(parsed.getTime())) {
    return "";
  }
  return parsed.toLocaleDateString("nb-NO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
