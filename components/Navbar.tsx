"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Snowflake, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Offset for header height
        behavior: "smooth",
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3 text-primary-dark"
          : "bg-transparent py-5 text-white"
      )}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2 group">
            <Snowflake className={`h-7 w-7 ${isScrolled ? 'text-primary' : 'text-white'} group-hover:text-accent transition-colors duration-300`} />
            <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'group-hover:text-primary-light' : 'group-hover:text-white/80'} transition-colors duration-300`}>
              Klima servis
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {/* <Link
            href="#usluge"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("usluge");
            }}
            className={`text-sm font-medium transition-all duration-300 ${isScrolled ? 'hover:text-primary' : 'hover:text-white/80'} relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:translate-y-[-2px]`}
          >
            Usluge
          </Link>
          <Link
            href="#galerija"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("galerija");
            }}
            className={`text-sm font-medium transition-all duration-300 ${isScrolled ? 'hover:text-primary' : 'hover:text-white/80'} relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:translate-y-[-2px]`}
          >
            Galerija
          </Link>
          <Link
            href="#o-nama"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("o-nama");
            }}
            className={`text-sm font-medium transition-all duration-300 ${isScrolled ? 'hover:text-primary' : 'hover:text-white/80'} relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:translate-y-[-2px]`}
          >
            O nama
          </Link> */}
        </nav>
        <div className="flex items-center space-x-4">
          <Button 
            asChild 
            variant="accent" 
            className="hidden md:flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <Link href="/kontakt" className="flex items-center gap-2">
                    
                    Kontakt
                  </Link>
          </Button>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button size="icon" variant={isScrolled ? "outline" : "ghost"} className="md:hidden relative group">
                {mobileMenuOpen ? (
                  <X className="h-5 w-5 text-primary" />
                ) : (
                  <Menu className={`h-5 w-5 ${isScrolled ? 'text-primary' : 'text-white'} group-hover:text-accent transition-colors`} />
                )}
                <span className="sr-only">Meni</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-md">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b pb-4 mb-6">
                  <Link href="/" className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
                    <Snowflake className="h-6 w-6 text-primary" />
                    <span className="text-xl font-bold">Klima servis</span>
                  </Link>
                </div>
                <nav className="flex flex-col space-y-6 mt-6">
                  <Link
                    href="#usluge"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("usluge");
                    }}
                    className="text-lg font-medium transition-all duration-300 hover:text-primary hover:translate-x-2 flex items-center"
                  >
                    Usluge
                  </Link>
                  <Link
                    href="#galerija"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("galerija");
                    }}
                    className="text-lg font-medium transition-all duration-300 hover:text-primary hover:translate-x-2 flex items-center"
                  >
                    Galerija
                  </Link>
                  <Link
                    href="#o-nama"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("o-nama");
                    }}
                    className="text-lg font-medium transition-all duration-300 hover:text-primary hover:translate-x-2 flex items-center"
                  >
                    O nama
                  </Link>
                  <Link
                    href="/kontakt"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium transition-all duration-300 hover:text-primary hover:translate-x-2 flex items-center"
                  >
                    Kontakt
                  </Link>
                  <Button asChild className="mt-4 w-full hover:scale-105 transition-transform" variant="accent">
                    <Link href="tel:+38761102669" className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4" />
                      +387 61 102 669
                    </Link>
                  </Button>
                </nav>
                <div className="mt-auto pb-8 pt-6 border-t text-sm text-neutral-500">
                  <p>© {new Date().getFullYear()}</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
} 