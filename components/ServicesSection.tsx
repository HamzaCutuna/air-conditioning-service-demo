"use client";

import { Fan, Settings, Droplets, Zap } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import Image from "next/image";

const services = [
  {
    icon: <Fan className="h-8 w-8" />,
    title: "Ugradnja i servis klima uređaja",
    description:
      "Profesionalna ugradnja svih vrsta klima uređaja za stambene i poslovne objekte. Servisiranje i punjenje klima uređaja freonom.",
    image: "/images/majstor2.jpg",
  },
  {
    icon: <Settings className="h-8 w-8" />,
    title: "Servis rashladnih vitrina i komora",
    description:
      "Profesionalno servisiranje svih vrsta rashladnih vitrina i rashladnih komora, osiguravajući njihov dugotrajan i efikasan rad.",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: <Droplets className="h-8 w-8" />,
    title: "Čišćenje i dezinfekcija",
    description:
      "Uklanjanje prašine, bakterija i alergena iz uređaja. Dezinfekcija filtera za bolji kvalitet zraka. Preporučeno redovno održavanje za zdraviji prostor.",
    image: "/images/dezinfekcija.jpg",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Popravka i servis frižidera",
    description:
      "Sve vrste servisiranja i popravki frižidera, kako bismo osigurali nesmetan rad vašeg uređaja.",
    image: "https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  },
];

export function ServicesSection() {
  return (
    <section id="usluge" className="section bg-secondary overflow-hidden">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="section-title">Naše usluge</h2>
            <p className="section-subtitle">
              Pružamo kompletne usluge vezane za klima uređaje, frižidere i rashladne komore, od ugradnje do održavanja i punjenja, sa fokusom na kvalitet i pouzdanost.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index === 0 ? "none" : index === 1 ? "short" : index === 2 ? "medium" : "long"}>
              <div className="card card-hover h-full flex flex-col">
                <div className="relative h-48 w-full mb-4 overflow-hidden rounded-t-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4 text-primary">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary-dark">{service.title}</h3>
                  <p className="text-neutral-600">{service.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
} 