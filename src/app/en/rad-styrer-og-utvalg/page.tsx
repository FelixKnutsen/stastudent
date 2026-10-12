import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";
import { Button } from "@/components/shared/Button";
import { COMMITTEE_CATEGORIES } from "@/content/positions";
import {
  Users,
  Network,
  Briefcase,
  Building2,
  MessageSquare,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Info,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Get involved • Boards and Committees",
  description:
    "At STA, all UiA students can run for elected office! Explore all boards, committees, and governing bodies you can join at UiA.",
};

const SIX_REASONS_EN = [
  {
    icon: Users,
    title: "1. Represent students",
    description: "Help improve UiA and the everyday study experience for more than 14,000 fellow students.",
  },
  {
    icon: Network,
    title: "2. Build a network",
    description: "Get a large and valuable network across faculties, campuses, and with university leadership.",
  },
  {
    icon: Briefcase,
    title: "3. Career-relevant",
    description: "Challenge yourself, gain leadership and governance experience, and build strong credentials for your CV.",
  },
  {
    icon: Building2,
    title: "4. Organisational experience",
    description: "Gain deeper insight into how organizations, boards, and democratic institutions operate in practice.",
  },
  {
    icon: MessageSquare,
    title: "5. Discussion skills",
    description: "Learn to debate constructively, approach issues from multiple perspectives, and negotiate compromises.",
  },
  {
    icon: Sparkles,
    title: "6. Personal growth",
    description: "Most importantly: grow as a person, develop critical thinking, and broaden your horizons.",
  },
];

export default function EnglishRadStyrerOgUtvalgPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="Get involved – Boards & Committees"
          subtitle="At STA, all UiA students can run for elected office! Join us in shaping student life and university policy."
        />

        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <p className="text-base text-sta-teal-100 leading-relaxed">
            Elections for boards and committees happen in the spring during the Student Parliament election assembly.
            Open positions are announced on stastudent.no and across our social channels. For inquiries, contact{" "}
            <a href="mailto:sta@uia.no" className="text-sta-orange font-semibold hover:underline">
              sta@uia.no
            </a>.
          </p>
          <div className="pt-2">
            <Button href="/en/ledige-verv" variant="primary" size="lg">
              View vacant positions <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* 6 great reasons */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
            6 great reasons to get involved during your studies:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SIX_REASONS_EN.map((reason) => {
              const Icon = reason.icon;
              return (
                <Card key={reason.title} className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-sta-orange/20 text-sta-orange flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
                  <p className="text-xs text-sta-teal-100 leading-relaxed">{reason.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Image Card */}
        <div className="relative mb-16 max-w-4xl mx-auto overflow-hidden rounded-2xl border border-sta-teal-500/30">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-sta-teal-800">
            <Image
              src="https://stastudent.no/wp-content/uploads/2025/10/IMG_4439-1024x683.jpg"
              alt="Students in elected positions"
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover object-center"
            />
          </div>
          <div className="bg-sta-teal-900/90 p-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-1">STA has positions for you!</h3>
            <p className="text-xs text-sta-teal-100">
              Whether you are passionate about education, sustainability, student welfare, or social events, we have a position that fits your interests.
            </p>
          </div>
        </div>

        {/* Categories of Verv with official information links */}
        <div className="space-y-12">
          {COMMITTEE_CATEGORIES.map((category) => (
            <div key={category.titleEn}>
              <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-sta-teal-700/50">
                {category.titleEn}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <Card key={item.id} className="p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{item.nameEn}</h3>
                      <p className="text-xs text-sta-teal-100 leading-relaxed mb-4">{item.descEn}</p>
                    </div>

                    {item.infoUrl && (
                      <div className="pt-4 border-t border-sta-teal-700/40 mt-auto">
                        {item.isExternal ? (
                          <a
                            href={item.infoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-sta-orange hover:text-white transition-colors"
                          >
                            <Info className="w-3.5 h-3.5" />
                            <span>{item.infoUrlLabelEn || "Official information"}</span>
                            <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
                          </a>
                        ) : (
                          <Link
                            href={item.infoUrl.startsWith("/en") ? item.infoUrl : `/en${item.infoUrl}`}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-sta-orange hover:text-white transition-colors"
                          >
                            <Info className="w-3.5 h-3.5" />
                            <span>{item.infoUrlLabelEn || "Read more about this position"}</span>
                          </Link>
                        )}
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Button href="/en/ledige-verv" variant="primary" size="lg">
            Apply for positions today
          </Button>
        </div>
      </Container>
    </div>
  );
}
