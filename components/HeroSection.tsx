"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function HeroSection() {
  return (
    <section className="relative pt-36 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background image with parallax effect */}
      <div className="absolute inset-0 z-0 bg-fixed">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80"
          alt="Moderna kuća sa klima uređajem"
          fill
          priority
          className="object-cover transform scale-110 motion-safe:animate-subtle-parallax"
          style={{ transform: "translateZ(-10px)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <ScrollReveal delay="short">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Profesionalna ugradnja klima uređaja
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay="medium">
              <p className="text-xl md:text-2xl opacity-90 mt-6 max-w-xl">
                Brza, pouzdana i kvalitetna ugradnja klima uređaja u Bosni i Hercegovini.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay="long">
              <div className="mt-8">
                <Button 
                  size="lg" 
                  variant="accent" 
                  asChild
                  className="font-medium text-lg px-8 py-6 hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
                >
                  <Link href="/kontakt" className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Kontaktirajte danas
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="hidden lg:block relative">
            <ScrollReveal direction="left">
              <div className="relative rounded-lg overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105">
                <Image
                  src="/images/unutrasnja.jpg"
                  alt="Klima uređaj ugradnja"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-white font-medium text-lg">Moderna i efikasna rješenja za klimatizaciju</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
} 