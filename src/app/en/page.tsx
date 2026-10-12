import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { GraduationCap, Home, Users, Trophy, ArrowRight, ExternalLink } from "lucide-react";
import { NEWS_ARTICLES } from "@/content/news";
import { NewsCard } from "@/components/news/NewsCard";
import { PARTNERS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Student Organisation of Agder • STA",
  description:
    "The Student Organisation of Agder (STA) is an interest organisation representing all students at the University of Agder.",
};

const QUICK_LINKS_EN = [
  {
    title: "Academic associations",
    href: "/en/linjeforeninger",
    icon: GraduationCap,
    description: "Meet students in your program and join academic and social events.",
  },
  {
    title: "Our premises",
    href: "/en/lokaler",
    icon: Home,
    description: "Book or borrow venues for association meetings or student events.",
  },
  {
    title: "Student representatives",
    href: "/en/for-tillitsvalgte",
    icon: Users,
    description: "Resources, training and tools for class and faculty representatives.",
  },
  {
    title: "Student Activities",
    href: "/en/studentaktiviteter",
    icon: Trophy,
    description: "Sports clubs, cultural groups and student interest organisations.",
  },
];

export default function EnglishHomePage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative overflow-hidden py-12 sm:py-20 bg-gradient-to-b from-sta-teal-600/30 to-transparent">
        <Container>
          <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full rounded-2xl overflow-hidden border border-sta-teal-500/30 shadow-2xl mb-8">
            <Image
              src="https://stastudent.no/wp-content/uploads/2025/11/IMG_4781_CROP-scaled.jpg"
              alt="STA students at UiA"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
            />
          </div>

          {/* CTA Banner */}
          <div className="bg-sta-teal-800/80 border border-sta-teal-600/40 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Engasjer deg - still til verv!
              </h2>
              <p className="text-sm text-sta-teal-100 mt-1">
                Get involved and represent students at the University of Agder.
              </p>
            </div>
            <Button href="/en/ledige-verv" variant="primary" size="lg" className="shrink-0">
              Vacant positions <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Quick Nav Grid */}
      <section className="py-12">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {QUICK_LINKS_EN.map((item) => {
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

      {/* Latest News */}
      <section className="py-12 bg-sta-teal-900/40">
        <Container>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wider">NEWS</h2>
            <Link
              href="/en/category/nyheter"
              className="text-xs font-semibold text-sta-orange hover:text-white flex items-center gap-1"
            >
              <span>View all news</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {NEWS_ARTICLES.slice(0, 3).map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Sections (Student Parliament & Karriereuka) */}
      <section className="py-12">
        <Container className="space-y-8">
          {/* Card 1: The Student Parliament */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-sta-teal-800/40 border border-sta-teal-600/40 rounded-2xl p-6 sm:p-8">
            <div className="lg:col-span-5">
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden">
                <Image
                  src="https://stastudent.no/wp-content/uploads/2025/11/IMG_4780-1024x683.jpg"
                  alt="The Student Parliament"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">The Student Parliament</h2>
              <p className="text-sm text-sta-teal-100 leading-relaxed">
                UiAs øverste studentrepresentanter – The highest decision-making body for students at the University of Agder.
              </p>
              <div>
                <Button href="/en/studentparlamentet" variant="primary" size="md">
                  Read more! <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Card 2: UiA Karriereuka */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-sta-teal-800/40 border border-sta-teal-600/40 rounded-2xl p-6 sm:p-8">
            <div className="lg:col-span-5">
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden">
                <Image
                  src="https://stastudent.no/wp-content/uploads/2026/02/DSC05899-–-middels.jpeg"
                  alt="UiA Karriereuka"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">UiA Karriereuka</h2>
              <p className="text-sm text-sta-teal-100 leading-relaxed">
                Students&apos; arena for contact with the business community. Discover career fairs, networking events and workshops.
              </p>
              <div>
                <Button href="https://uiakarriereuka.no/" isExternal variant="primary" size="md">
                  Read more! <ExternalLink className="w-4 h-4 ml-1.5" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Partner Logos */}
      <section className="py-12 border-t border-sta-teal-700/40">
        <Container>
          <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-sta-teal-200 mb-8">
            Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {PARTNERS.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-xl bg-sta-teal-800/30 hover:bg-sta-teal-700/50 border border-sta-teal-600/20 flex items-center justify-center transition-all hover:scale-105 text-center text-xs font-semibold text-white"
              >
                {partner.name}
              </a>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
