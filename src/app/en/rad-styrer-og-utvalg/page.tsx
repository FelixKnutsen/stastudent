import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";
import { Button } from "@/components/shared/Button";
import { Users, Network, Briefcase, Building2, MessageSquare, Sparkles, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Get involved • Boards and Committees",
  description:
    "Want to get involved? Find an overview of all positions and committees you can join at UiA!",
};

const SIX_REASONS_EN = [
  {
    icon: Users,
    title: "1. Represent students",
    description: "Help improve UiA and the everyday study experience for more than 14,000 students.",
  },
  {
    icon: Network,
    title: "2. Build a network",
    description: "Get a large and valuable network across faculties, campuses, and with university leadership.",
  },
  {
    icon: Briefcase,
    title: "3. Career-relevant",
    description: "Challenge yourself and acquire valuable leadership experience and credentials for your CV.",
  },
  {
    icon: Building2,
    title: "4. Organisational experience",
    description: "Gain deeper insight into how organizations and democracies work in practice.",
  },
  {
    icon: MessageSquare,
    title: "5. Discussion skills",
    description: "Learn to debate constructively, see issues from multiple angles and build consensus.",
  },
  {
    icon: Sparkles,
    title: "6. Personal growth",
    description: "Most importantly: grow as a person, become more reflected and expand your perspective.",
  },
];

export default function EnglishRadStyrerOgUtvalgPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="Get involved – Boards & Committees"
          subtitle="At STA, all UiA students can run for elected office! Join us in shaping student life."
        />

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

        <div className="relative mb-16 overflow-hidden rounded-2xl border border-sta-teal-500/30">
          <div className="relative aspect-[16/7] w-full bg-sta-teal-800">
            <Image
              src="https://stastudent.no/wp-content/uploads/2025/10/IMG_4439-1024x683.jpg"
              alt="Students in elected positions"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
            />
          </div>
          <div className="bg-sta-teal-900/90 p-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-1">STA has positions for you!</h3>
            <p className="text-xs text-sta-teal-100">
              Whether you are passionate about education, sustainability, student welfare or social events, we have a position that fits your interests.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button href="/en/ledige-verv" variant="primary" size="lg">
            Apply for positions today
          </Button>
        </div>
      </Container>
    </div>
  );
}
