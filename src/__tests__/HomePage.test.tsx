import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HomePage from "@/app/page";

describe("HomePage", () => {
  it("renders key landing sections", () => {
    render(<HomePage />);
    expect(screen.getByText(/Engasjer deg - still til verv!/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Linjeforeninger/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/SISTE NYTT/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Studentparlamentet/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/UiA Karriereuka/i)).toBeInTheDocument();
  });
});
