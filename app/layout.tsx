import "./globals.css";
import { Montserrat, Poppins } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
});

export const metadata = {
  title: "Profesionalna ugradnja klima uređaja",
  description: "Profesionalna ugradnja klima uređaja. Brzo, pouzdano i kvalitetno.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bs" className={`${montserrat.variable} ${poppins.variable} scroll-smooth`}>
      <body>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
