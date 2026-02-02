"use client";

import { CheckCircle, Shield, Clock, Award, ThumbsUp } from "lucide-react";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: <Award className="h-6 w-6" />,
    title: "Iskustvo",
    description: "Dugogodišnje iskustvo u struci"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Kvalitet",
    description: "Profesionalni tehničari sa licencama"
  },
  {
    icon: <ThumbsUp className="h-6 w-6" />,
    title: "Garancija",
    description: "Garancija na sve naše usluge"
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Brzina",
    description: "Brza i pouzdana usluga"
  }
];

export function AboutSection() {
  return (
    <section id="o-nama" className="section overflow-hidden bg-gradient-to-b from-white to-secondary/30">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div>
              <h2 className="section-title mb-4">
                Zašto izabrati nas?
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Naš tim iskusnih profesionalaca je posvećen pružanju visokokvalitetnih 
                rješenja za klimatizaciju koja su prilagođena vašim specifičnim potrebama. 
                Sa dugogodišnjim iskustvom i tehničkom stručnošću, mi smo partner od 
                povjerenja za sve vaše potrebe vezane za klimatizaciju.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {features.map((feature, index) => (
                  <ScrollReveal key={index} delay={index % 2 === 0 ? "short" : "medium"} direction="up">
                    <div className="bg-white p-6 rounded-lg shadow-soft hover:shadow-hover transition-all duration-300 transform hover:-translate-y-2 group">
                      <div className="flex items-center mb-4">
                        <div className="p-2.5 bg-primary/10 rounded-full text-primary mr-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          {feature.icon}
                        </div>
                        <h3 className="font-bold text-lg text-primary-dark group-hover:text-primary transition-colors duration-300">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-neutral-600 ml-[3.25rem] group-hover:text-neutral-700 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
              
              <ScrollReveal delay="long">
                <div className="flex justify-center">
                  <Button 
                    variant="accent" 
                    size="lg" 
                    className="px-10 py-6 text-lg hover:scale-105 transition-transform shadow-md hover:shadow-lg" 
                    asChild
                  >
                    <a href="/kontakt">Zatražite besplatnu procjenu</a>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="left">
            <div className="relative rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-[1.02] shadow-xl hover:shadow-2xl">
              <div className="aspect-[3/4] relative">
                <Image 
                  src="/images/majstor.jpg"
                  alt="Profesionalni tehničar za klima uređaje"
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md transform transition-all duration-300 hover:bg-white hover:shadow-lg">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="text-primary mr-3 h-6 w-6 flex-shrink-0" />
                    <p className="font-medium">Transparentne cijene bez skrivenih troškova</p>
                  </div>
                  <p className="text-neutral-600">
                    Naši klijenti uvijek znaju tačno koliko koštaju naše usluge. Nema iznenađenja nakon završetka posla.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
} 