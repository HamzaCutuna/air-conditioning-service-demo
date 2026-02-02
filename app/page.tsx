import { AboutSection } from "@/components/AboutSection";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { GallerySection } from "@/components/GallerySection";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <GallerySection />
      
      {/* Contact CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Trebate našu pomoć?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Naš tim stručnjaka je spreman pomoći vam s ugradnjom, servisom ili popravkom klima uređaja.
          </p>
          <Button 
            asChild 
            size="lg" 
            variant="accent" 
            className="px-8 py-6 text-lg font-medium hover:scale-105 transition-transform shadow-lg"
          >
            <Link href="/kontakt" className="flex items-center gap-2">
              Kontaktirajte nas
              <ArrowRight className="h-5 w-5 ml-1" />
            </Link>
          </Button>
        </div>
      </section>
      
      <ScrollToTop />
    </>
  );
}
