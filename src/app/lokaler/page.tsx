"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";
import { Button } from "@/components/shared/Button";
import { Mail, ExternalLink, ChevronLeft, ChevronRight, FileDown } from "lucide-react";

const ALIBIET_IMAGES = [
  {
    url: "https://stastudent.no/wp-content/uploads/2022/08/PXL_20220819_092836179-768x576.jpg",
    caption: "Utenfor Alibiet",
  },
  {
    url: "https://stastudent.no/wp-content/uploads/2022/08/PXL_20220819_093006806-768x576.jpg",
    caption: "Inngangen til Alibiet",
  },
  {
    url: "https://stastudent.no/wp-content/uploads/2022/08/PXL_20220819_093021348.MP_-768x576.jpg",
    caption: "Fest- og arrangementsarealet",
  },
  {
    url: "https://stastudent.no/wp-content/uploads/2022/08/PXL_20220819_093039894.MP_-768x576.jpg",
    caption: "Kjøkkenet til festlokalet",
  },
  {
    url: "https://stastudent.no/wp-content/uploads/2022/08/PXL_20220819_113150219-768x576.jpg",
    caption: "Inngangen til kontorlokalet",
  },
  {
    url: "https://stastudent.no/wp-content/uploads/2022/08/PXL_20220819_113156984.MP_-768x576.jpg",
    caption: "TV-krok og sittegruppe",
  },
  {
    url: "https://stastudent.no/wp-content/uploads/2022/08/PXL_20220819_113132165-768x576.jpg",
    caption: "Møteplass",
  },
];

export default function LokalerPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? ALIBIET_IMAGES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === ALIBIET_IMAGES.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="Lokaler"
          subtitle="Alle studentaktiviteter og linjeforeninger som er medlem av STA kan booke Alibiet og Bluebox lokalene til STA."
        />

        {/* Venue 1: Alibiet */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-sta-orange/20 text-sta-orange text-xs font-bold uppercase tracking-wider">
              Campus Kristiansand
            </span>
            <h2 className="text-3xl font-bold text-white">Alibiet</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
            {/* Image Slider */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-sta-teal-500/30 bg-sta-teal-800 shadow-xl">
                <Image
                  src={(ALIBIET_IMAGES[currentSlide]?.url ?? ALIBIET_IMAGES[0]?.url) || ""}
                  alt={ALIBIET_IMAGES[currentSlide]?.caption || "Alibiet"}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-opacity duration-300"
                />

                {/* Slider Controls */}
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-sta-orange transition-colors"
                  aria-label="Forrige bilde"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-sta-orange transition-colors"
                  aria-label="Neste bilde"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Caption bar */}
                <div className="absolute bottom-0 inset-x-0 bg-black/60 backdrop-blur-sm p-3 text-xs text-white flex justify-between items-center">
                  <span>{ALIBIET_IMAGES[currentSlide]?.caption || ""}</span>
                  <span className="text-sta-teal-200">
                    {currentSlide + 1} / {ALIBIET_IMAGES.length}
                  </span>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
                {ALIBIET_IMAGES.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`relative w-16 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                      currentSlide === idx ? "border-sta-orange scale-105" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={img.url} alt={img.caption} fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Info Card */}
            <div className="lg:col-span-5 space-y-6">
              <Card className="p-6 space-y-4">
                <h3 className="text-lg font-bold text-white">Om Alibiet</h3>
                <p className="text-sm text-sta-teal-100 leading-relaxed">
                  Alibiet inneholder musikkanlegg, kjøleskap og sitteplasser med tilhørende bord. Lokalet er perfekt for foreningskvelder, fester, brettspill og sosiale sammenkomster.
                </p>

                <div className="pt-2 border-t border-sta-teal-600/30">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-sta-orange mb-2">
                    Bookingregler
                  </h4>
                  <ul className="text-xs text-sta-teal-100 space-y-2 leading-relaxed">
                    <li>• Booking foregår via e-post til: <a href="mailto:sta@uia.no" className="text-sta-orange underline">sta@uia.no</a></li>
                    <li>• Foreninger bookes inn fortløpende i kalenderen.</li>
                    <li>• Skriftlig bekreftelse sendes innen 1–3 virkedager.</li>
                    <li>• Booking må sendes fra foreningens offisielle e-post.</li>
                  </ul>
                </div>

                <div className="pt-2 border-t border-sta-teal-600/30">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-sta-orange mb-2">
                    Kontorlokalet
                  </h4>
                  <p className="text-xs text-sta-teal-100 leading-relaxed">
                    Kontorlokalet på Alibiet er gratis tilgjengelig for studentaktiviteter og linjeforeninger uten forhåndsbooking. For nøkkelkortadgang, kontakt <a href="mailto:sta@uia.no" className="underline">sta@uia.no</a>.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href="https://stastudent.no/wp-content/uploads/2025/10/Alibireglement.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sta-orange hover:text-white"
                  >
                    <FileDown className="w-4 h-4" />
                    <span>Last ned Alibireglementet (PDF)</span>
                  </a>
                </div>
              </Card>

              <Button
                href="mailto:sta@uia.no?subject=Booking%20av%20Alibiet"
                variant="primary"
                size="md"
                className="w-full"
              >
                <Mail className="w-4 h-4 mr-2" />
                Book Alibiet via e-post
              </Button>
            </div>
          </div>
        </div>

        {/* Venue 2: Bluebox */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-sta-orange/20 text-sta-orange text-xs font-bold uppercase tracking-wider">
              Campus Grimstad
            </span>
            <h2 className="text-3xl font-bold text-white">Bluebox</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-sta-teal-500/30 bg-sta-teal-800 shadow-xl">
                <Image
                  src="https://stastudent.no/wp-content/uploads/2022/09/20220901_090008-1024x766.jpg"
                  alt="Bluebox Grimstad"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-black/60 backdrop-blur-sm p-3 text-xs text-white">
                  <span>Møterom og lager på Bluebox • Foto: Irene Bredal / STA</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <Card className="p-6 space-y-4">
                <h3 className="text-lg font-bold text-white">Om lokalene på Bluebox</h3>
                <p className="text-sm text-sta-teal-100 leading-relaxed">
                  På Bluebox har STA to møterom og et lager som medlemsforeninger og studentaktiviteter kan benytte gratis til møter og arrangementer.
                </p>

                <div className="pt-2 border-t border-sta-teal-600/30">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-sta-orange mb-2">
                    Bookingmetode
                  </h4>
                  <p className="text-xs text-sta-teal-100 leading-relaxed">
                    Manuell fysisk booking foregår ved å gå opp i 2. etasje på Bluebox og skrive opp foreningen på listen som henger på døren til møterommet.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href="https://bluebox.no"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sta-orange hover:text-white"
                  >
                    <span>Besøk Bluebox sin offisielle nettside</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
