import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Header } from "@/components/layout/Header";

describe("Header component", () => {
  it("renders the STA brand logo and navigation items", () => {
    render(<Header />);
    expect(screen.getByText("STA")).toBeInTheDocument();
    expect(screen.getByText("Hjem")).toBeInTheDocument();
    expect(screen.getByText("Dokumenter")).toBeInTheDocument();
    expect(screen.getByText("Tillitsvalgt")).toBeInTheDocument();
  });
});
