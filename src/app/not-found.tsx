import React from "react";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";

export default function NotFound() {
  return (
    <div className="py-24 text-center">
      <Container>
        <div className="max-w-md mx-auto space-y-6">
          <span className="text-6xl font-black text-sta-orange">404</span>
          <h1 className="text-3xl font-bold text-white">Siden ble ikke funnet</h1>
          <p className="text-sta-teal-100 text-sm">
            Beklager, siden du leter etter eksisterer ikke eller har blitt flyttet.
          </p>
          <div className="pt-4">
            <Button href="/" variant="primary">
              Gå tilbake til forsiden
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
