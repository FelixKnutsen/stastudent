import React from "react";
import { Container } from "../shared/Container";
import { Button } from "../shared/Button";
import { ArrowRight } from "lucide-react";

export function VervCtaSection() {
  return (
    <section className="py-6">
      <Container>
        <div className="bg-sta-teal-800/80 border border-sta-teal-600/40 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl text-center sm:text-left">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Engasjer deg - still til verv!
            </h2>
            <p className="text-sm text-sta-teal-100">
              Bli med og gjør en forskjell for over 14 000 studenter ved Universitetet i Agder.
            </p>
          </div>
          <Button href="/ledige-verv" variant="primary" size="lg" className="shrink-0">
            Ledige verv <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
