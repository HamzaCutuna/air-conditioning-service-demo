"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">O nama</h3>
            <p className="opacity-80 mb-6">
              Kvalitetno održavanje svih vrsta rashladnih uređaja i efikasnost rješavanja kvarova na licu mjesta naša je odlika širom Bosne i Hercegovine. 
            </p>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            
            <div className="space-y-4">
              <div className="flex items-start group cursor-pointer">
                <Phone className="w-5 h-5 mr-3 mt-1 group-hover:text-accent transition-colors" />
                <div>
                  <p className="font-medium">Telefon</p>
                  <a href="tel:+38733000000" className="opacity-80 hover:opacity-100 transition-opacity group-hover:text-accent">
                    +387 33 000 000
                  </a>
                </div>
              </div>
              
              <div className="flex items-start group cursor-pointer">
                <Mail className="w-5 h-5 mr-3 mt-1 group-hover:text-accent transition-colors" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:info@example.com" className="opacity-80 hover:opacity-100 transition-opacity group-hover:text-accent">
                    info@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start group cursor-pointer">
                <MapPin className="w-5 h-5 mr-3 mt-1 group-hover:text-accent transition-colors" />
                <div>
                  <p className="font-medium">Adresa</p>
                  <span className="opacity-80">
                    Ulica 12<br />
                    71000 Sarajevo, BiH
                  </span>
                </div>
              </div>
              
              
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Brzi linkovi</h3>
            <ul className="space-y-2">
              <li className="transform transition-all duration-200 hover:translate-x-1">
                <Link href="/#pocetna" className="opacity-80 hover:opacity-100 transition-opacity hover:text-accent">
                  Početna
                </Link>
              </li>
              <li className="transform transition-all duration-200 hover:translate-x-1">
                <Link href="/#usluge" className="opacity-80 hover:opacity-100 transition-opacity hover:text-accent">
                  Usluge
                </Link>
              </li>
              <li className="transform transition-all duration-200 hover:translate-x-1">
                <Link href="/#galerija" className="opacity-80 hover:opacity-100 transition-opacity hover:text-accent">
                  Galerija
                </Link>
              </li>
              <li className="transform transition-all duration-200 hover:translate-x-1">
                <Link href="/#o-nama" className="opacity-80 hover:opacity-100 transition-opacity hover:text-accent">
                  O nama
                </Link>
              </li>
              <li className="transform transition-all duration-200 hover:translate-x-1">
                <Link href="/kontakt" className="opacity-80 hover:opacity-100 transition-opacity hover:text-accent">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-primary-darker py-4">
        <div className="container">
          <div className="text-center">
            <p className="text-sm opacity-80">
              © {currentYear}. Sva prava pridržana.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 