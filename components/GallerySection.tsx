"use client";

import { useState } from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Profesionalna ugradnja klima uređaja",
    title: "Ugradnja u stambenim objektima",
    description: "Profesionalna ugradnja klima uređaja u stambenom prostoru"
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Moderni klima uređaj",
    title: "Moderni klima uređaji",
    description: "Najnoviji modeli energetski efikasnih klima uređaja"
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Servis klima uređaja",
    title: "Servis i održavanje klima uređaja",
    description: "Redovno održavanje i servis za optimalan rad vašeg klima uređaja"
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Klima sistem u kancelariji",
    title: "Klimatizacija poslovnih prostora",
    description: "Efikasna klimatizacija poslovnih objekata po mjeri"
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Ugradnja na vanjskom zidu",
    title: "Vanjska ugradnja klima uređaja",
    description: "Stručna ugradnja vanjskih jedinica klima uređaja"
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "Punjenje klima uređaja",
    title: "Punjenje klima uređaja",
    description: "Punjenje je ključno za efikasan i  kvalitetan rad klime."
  },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="galerija" className="section bg-gradient-to-b from-secondary/50 to-secondary overflow-hidden py-20">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="section-title">Naši projekti</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Pogledajte galeriju naših nedavnih ugradnji i servisa klima uređaja. Kliknite na sliku za detaljniji prikaz.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <ScrollReveal 
              key={index} 
              delay={index % 3 === 0 ? "none" : index % 3 === 1 ? "short" : "medium"}
            >
              <div 
                className="overflow-hidden rounded-lg shadow-soft cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-hover group relative"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative h-64">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <ZoomIn className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white h-12 w-12 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100" />
                    <h3 className="font-bold text-lg text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{image.title}</h3>
                    <p className="text-white/90 text-sm mt-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{image.description}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox with improved animations */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors transform hover:rotate-90 transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X className="h-6 w-6" />
          </button>
          <div className="relative w-full max-w-4xl max-h-[80vh] rounded-lg overflow-hidden animate-scaleIn" onClick={e => e.stopPropagation()}>
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              width={1000}
              height={700}
              className="object-contain w-full h-full"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent text-white">
              <h3 className="font-bold text-xl mb-2">{galleryImages[selectedImage].title}</h3>
              <p className="text-white/90">{galleryImages[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
} 