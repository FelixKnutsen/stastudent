import { describe, it, expect } from "vitest";
import { cn } from "@/lib/utils";
import { formatNorwegianDate } from "@/lib/date";

describe("Utility functions", () => {
  describe("cn", () => {
    it("merges class names correctly", () => {
      const result = cn("text-white", "bg-sta-teal", { "font-bold": true, "opacity-50": false });
      expect(result).toBe("text-white bg-sta-teal font-bold");
    });

    it("handles Tailwind conflicting classes with precedence", () => {
      const result = cn("p-4", "p-8");
      expect(result).toBe("p-8");
    });
  });

  describe("formatNorwegianDate", () => {
    it("formats ISO string date to Norwegian text", () => {
      const formatted = formatNorwegianDate("2026-04-13T12:00:00Z");
      expect(formatted).toMatch(/13\.\s*april\s*2026/i);
    });

    it("returns empty string on invalid date", () => {
      expect(formatNorwegianDate("invalid-date")).toBe("");
    });
  });
});
