import HeroSection from "@/components/HeroSection";
import ScrollUp from "@/components/common/ScrollUp";
import Hero from "@/components/Hero";
import { Metadata } from "next";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";
import HowToHelp from "@/components/HowToHelp";

export const metadata: Metadata = {
  title: "Inicio | Adopet",
  description:
    "Esta aplicación permite a la comunidad reportar de manera fácil, rápida y sencilla a animales en situación de abandono.",
  keywords: [
    "adopción",
    "rescate",
    "mascotas",
    "reporte de animales",
    "animales",
  ],
};

export default function Home() {
  return (
    <main>
      <ScrollUp />
      <Hero />
      <HeroSection />
      <CallToAction />
      <Testimonials />
      <HowToHelp />
    </main>
  );
}
