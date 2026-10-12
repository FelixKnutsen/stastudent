"use client";

import React, { useEffect } from "react";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="py-24 text-center">
      <Container>
        <div className="max-w-md mx-auto space-y-6">
          <h1 className="text-3xl font-bold text-white">Noe gikk galt</h1>
          <p className="text-sta-teal-100 text-sm">
            En uventet feil oppsto ved lasting av siden.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Button onClick={() => reset()} variant="primary">
              Prøv på nytt
            </Button>
            <Button href="/" variant="outline">
              Til forsiden
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
