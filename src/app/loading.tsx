import React from "react";
import { Container } from "@/components/shared/Container";

export default function Loading() {
  return (
    <div className="py-24 text-center">
      <Container>
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="w-12 h-12 border-4 border-sta-orange border-t-transparent rounded-full animate-spin" />
          <p className="text-sta-teal-100 text-sm">Laster innhold...</p>
        </div>
      </Container>
    </div>
  );
}
