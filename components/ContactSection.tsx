"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Ime mora sadržavati najmanje 2 karaktera.",
  }),
  email: z.string().email({
    message: "Molimo unesite validnu email adresu.",
  }),
  phone: z.string().min(6, {
    message: "Broj telefona mora sadržavati najmanje 6 brojeva.",
  }),
  message: z.string().min(10, {
    message: "Poruka mora sadržavati najmanje 10 karaktera.",
  }),
});

export function ContactSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Hvala na poruci! Kontaktiraćemo vas uskoro.");
    form.reset();
  }

  return (
    <section id="kontakt" className="section bg-gradient-to-b from-white to-secondary/50 overflow-hidden pt-20 pb-0">
      <div className="container mb-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-title">Kontaktirajte nas</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Imate pitanje ili želite zakazati ugradnju klima uređaja? Kontaktirajte nas i dobićete brz odgovor.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <ScrollReveal>
              <div className="bg-white rounded-xl shadow-medium p-8 hover:shadow-lg transition-shadow duration-300 transform">
                <h3 className="text-2xl font-bold mb-6 text-primary-dark">Pošaljite upit</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-neutral-700">Ime i prezime</FormLabel>
                            <FormControl>
                              <Input placeholder="Vaše ime i prezime" className="input-field" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-neutral-700">Telefon</FormLabel>
                            <FormControl>
                              <Input placeholder="Vaš broj telefona" className="input-field" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-neutral-700">Email</FormLabel>
                          <FormControl>
                            <Input placeholder="vas.email@example.com" className="input-field" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-neutral-700">Poruka</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Opišite vaše potrebe ili postavite pitanje..."
                              className="input-field resize-none h-32"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      variant="accent" 
                      className="w-full sm:w-auto px-10 py-6 hover:scale-105 transition-transform shadow-md hover:shadow-lg animate-pulse-glow"
                      size="lg"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Pošalji upit
                    </Button>
                  </form>
                </Form>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal direction="left">
              <div className="bg-primary text-white rounded-xl shadow-medium p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-6">Kontakt informacije</h3>
                <div className="space-y-6">
                  <div className="flex items-start group cursor-pointer">
                    <div className="bg-white/10 p-3 rounded-full mr-4 group-hover:bg-accent transition-all duration-300">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Adresa</h4>
                      <p className="text-white/80 group-hover:text-white transition-colors duration-300">
                        Hipodrom 209<br />
                        71000 Sarajevo, BiH
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start group cursor-pointer">
                    <div className="bg-white/10 p-3 rounded-full mr-4 group-hover:bg-accent transition-all duration-300">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Telefon</h4>
                      <p className="text-white/80 group-hover:text-white transition-colors duration-300">
                        <a href="tel:+38761102669" className="hover:text-white transition-colors">
                          +387 61 102 669
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start group cursor-pointer">
                    <div className="bg-white/10 p-3 rounded-full mr-4 group-hover:bg-accent transition-all duration-300">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <p className="text-white/80 group-hover:text-white transition-colors duration-300">
                        <a href="mailto:cikamajstor@gmail.com" className="hover:text-white transition-colors">
                          cikamajstor@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start group cursor-pointer">
                    <div className="bg-white/10 p-3 rounded-full mr-4 group-hover:bg-accent transition-all duration-300">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Radno vrijeme</h4>
                      <p className="text-white/80 group-hover:text-white transition-colors duration-300">
                        Pon - Pet: 08:00 - 17:00<br />
                        Sub: 09:00 - 15:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="left" delay="medium">
              <div className="bg-white rounded-xl shadow-medium p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-primary-dark flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-accent" />
                    Naša lokacija
                  </h3>
                  <a 
                    href="https://maps.app.goo.gl/3ChvNSPJtTPvbu2m6" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary text-sm flex items-center hover:text-accent transition-colors"
                  >
                    Otvori u Mapama
                    <ArrowUpRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
                <div className="rounded-lg overflow-hidden shadow-soft h-[220px] hover:shadow-medium transition-shadow duration-300">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1499.1042719004095!2d18.33157500450116!3d43.80599108326857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758b7f410060245%3A0x17f34b0f816daa40!2sFrigo%20servis%20rashladne%20tehnike%20frizidera%20rashladnih%20vitrina%20klima%20hladjenje%20Sarajevo!5e1!3m2!1sbs!2sba!4v1741782235236!5m2!1sbs!2sba" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
} 