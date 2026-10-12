import React from "react";
import Link from "next/link";
import { Container } from "../shared/Container";
import { GraduationCap, Home, Users, Trophy } from "lucide-react";

const QUICK_LINKS = [
  {
    title: "Linjeforeninger",
    href: "/linjeforeninger",
    icon: GraduationCap,
    description: "Møt studentene på ditt studieprogram og delta på sosiale og faglige aktiviteter.",
  },
  {
    title: "Lokaler",
    href: "/lokaler",
    icon: Home,
    description: "Lei eller lån lokaler til foreningsmøter, kurs eller studentarrangementer.",
  },
  {
    title: "Tillitsvalgte",
    href: "/for-tillitsvalgte",
    icon: Users,
    description: "Ressurser, opplæring og verktøy for tillitsvalgte og studentrepresentanter.",
  },
  {
    title: "Studentaktiviteter",
    href: "/studentaktiviteter",
    icon: Trophy,
    description: "Idrettslag, kulturklubber og studentorganisasjoner ved campus.",
  },
] as const;

export function QuickNavGrid() {
  return (
    <section className="py-12">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {QUICK_LINKS.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.title}
                href={item.href}
                className="group relative p-8 rounded-2xl bg-sta-teal-700/50 hover:bg-sta-teal-600/70 border border-sta-teal-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-sta-orange/20 text-sta-orange group-hover:bg-sta-orange group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-5">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-sta-orange transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-sta-teal-100 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
