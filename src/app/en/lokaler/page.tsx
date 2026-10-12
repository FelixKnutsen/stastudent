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
    caption: "Outside Alibiet",
  },
  {
    url: "https://stastudent.no/wp-content/uploads/2022/08/PXL_20220819_093006806-768x576.jpg",
    caption: "Entrance to Alibiet",
  },
  {
    url: "https://stastudent.no/wp-content/uploads/2022/08/PXL_20220819_093021348.MP_-768x576.jpg",
    caption: "Party and event area",
  },
  {
    url: "https://stastudent.no/wp-content/uploads/2022/08/PXL_20220819_093039894.MP_-768x576.jpg",
    caption: "Kitchen area",
  },
  {
    url: "https://stastudent.no/wp-content/uploads/2022/08/PXL_20220819_113150219-768x576.jpg",
    caption: "Office entrance",
  },
  {
    url: "https://stastudent.no/wp-content/uploads/2022/08/PXL_20220819_113156984.MP_-768x576.jpg",
    caption: "Lounge area",
  },
];

export default function EnglishLokalerPage() {
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
          title="Our premises"
          subtitle="All member student activities and academic associations can book STA's venues: Alibiet and Bluebox."
        />

        {/* Alibiet */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-sta-orange/20 text-sta-orange text-xs font-bold uppercase tracking-wider">
              Campus Kristiansand
            </span>
            <h2 className="text-3xl font-bold text-white">Alibiet</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-sta-teal-500/30 bg-sta-teal-800 shadow-xl">
                <Image
                  src={(ALIBIET_IMAGES[currentSlide]?.url ?? ALIBIET_IMAGES[0]?.url) || ""}
                  alt={ALIBIET_IMAGES[currentSlide]?.caption || "Alibiet"}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />

                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-sta-orange transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-sta-orange transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                <div className="absolute bottom-0 inset-x-0 bg-black/60 backdrop-blur-sm p-3 text-xs text-white flex justify-between items-center">
                  <span>{ALIBIET_IMAGES[currentSlide]?.caption || ""}</span>
                  <span className="text-sta-teal-200">
                    {currentSlide + 1} / {ALIBIET_IMAGES.length}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <Card className="p-6 space-y-4">
                <h3 className="text-lg font-bold text-white">About Alibiet</h3>
                <p className="text-sm text-sta-teal-100 leading-relaxed">
                  Alibiet includes sound equipment, refrigerator, and seating with tables. Perfect for association meetings, game nights, and social events.
                </p>

                <div className="pt-2 border-t border-sta-teal-600/30">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-sta-orange mb-2">
                    Booking rules
                  </h4>
                  <ul className="text-xs text-sta-teal-100 space-y-2 leading-relaxed">
                    <li>• Booking takes place via email to: <a href="mailto:sta@uia.no" className="text-sta-orange underline">sta@uia.no</a></li>
                    <li>• Associations are booked continuously in the calendar.</li>
                    <li>• Written confirmation is sent within 1–3 business days.</li>
                    <li>• Must be requested from the association&apos;s official email.</li>
                  </ul>
                </div>

                <div className="pt-2">
                  <a
                    href="https://stastudent.no/wp-content/uploads/2025/10/Alibireglement.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sta-orange hover:text-white"
                  >
                    <FileDown className="w-4 h-4" />
                    <span>Download Alibiet Regulations (PDF)</span>
                  </a>
                </div>
              </Card>

              <Button
                href="mailto:sta@uia.no?subject=Booking%20of%20Alibiet"
                variant="primary"
                size="md"
                className="w-full"
              >
                <Mail className="w-4 h-4 mr-2" />
                Book Alibiet via email
              </Button>
            </div>
          </div>
        </div>

        {/* Bluebox */}
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
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <Card className="p-6 space-y-4">
                <h3 className="text-lg font-bold text-white">Premises at Bluebox</h3>
                <p className="text-sm text-sta-teal-100 leading-relaxed">
                  At Bluebox, STA has two meeting rooms and storage that student associations can utilize free of charge.
                </p>

                <div className="pt-2 border-t border-sta-teal-600/30">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-sta-orange mb-2">
                    Booking procedure
                  </h4>
                  <p className="text-xs text-sta-teal-100 leading-relaxed">
                    Physical booking: Go to the 2nd floor of Bluebox and write your association on the sign-up list posted on the meeting room door.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href="https://bluebox.no"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sta-orange hover:text-white"
                  >
                    <span>Visit the Bluebox website</span>
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
