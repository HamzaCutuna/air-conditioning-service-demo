import { ContactForm } from "@/components/ContactForm";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

export const metadata = {
  title: 'Kontakt | Profesionalna ugradnja i servis klima uređaja',
  description: 'Kontaktirajte nas za profesionalnu ugradnju, servis i popravku klima uređaja. Besplatne procjene i brzi odgovori na upite.',
};

export default function KontaktPage() {
  return (
    <>
      <div className="pt-32 pb-20 bg-gradient-to-b from-primary/95 to-primary-dark/95 text-white">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kontaktirajte nas</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl">
            Imate pitanje ili želite zakazati ugradnju klima uređaja? Kontaktirajte nas i dobićete brz odgovor.
          </p>
        </div>
      </div>
      
      <ContactForm />
      <ScrollToTop />
    </>
  );
} 