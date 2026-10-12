import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";
import { Button } from "@/components/shared/Button";
import { MapPin, CalendarCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Lokaler for studenter",
  description: "Lån og leie av lokaler for studentorganisasjoner i Kristiansand og Grimstad.",
};

const VENUES = [
  {
    title: "STA Møterom – Kristiansand",
    campus: "Campus Kristiansand",
    capacity: "Opptil 16 personer",
    features: "Videokonferanseutstyr, tavle, kaffemaskin og fleksible bord.",
  },
  {
    title: "STA Studentrom – Grimstad",
    campus: "Campus Grimstad",
    capacity: "Opptil 20 personer",
    features: "Prosjektor, lydanlegg, sittegrupper og møtebord.",
  },
  {
    title: "Auditorier og Undervisningsrom",
    campus: "Begge campuser (UiA)",
    capacity: "Opptil 200 personer",
    features: "Bookes gjennom STA for godkjente studentforeninger og arrangementer.",
  },
];

export default function LokalerPage() {
  return (
    <div className="py-16">
      <Container>
        <SectionHeading
          title="Lokaler & Booking"
          subtitle="STA stiller lokaler til disposisjon for studentforeninger og studentaktiviteter."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {VENUES.map((venue) => (
            <Card key={venue.title} className="p-6 flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-1 text-xs text-sta-orange font-semibold mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  {venue.campus}
                </span>
                <h3 className="text-lg font-bold text-white mb-2">{venue.title}</h3>
                <p className="text-xs text-sta-teal-200 mb-2 font-medium">
                  Kapasitet: {venue.capacity}
                </p>
                <p className="text-xs text-sta-teal-100 leading-relaxed">
                  {venue.features}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-sta-teal-600/30">
                <Button
                  href={`mailto:sta@uia.no?subject=Booking%20av%20lokale:%20${encodeURIComponent(venue.title)}`}
                  variant="primary"
                  size="sm"
                  className="w-full"
                >
                  <CalendarCheck className="w-4 h-4 mr-1.5" />
                  Forespør booking
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
