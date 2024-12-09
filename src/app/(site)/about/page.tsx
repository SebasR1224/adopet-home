import History from "@/components/History";
import Breadcrumb from "@/components/common/Breadcrumb";
import CoreValuesSection from "@/components/CoreValuesSection";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acerca de | Adopet",
  description:
    "Esta aplicación permite a la comunidad reportar de manera fácil, rápida y sencilla a animales en situación de abandono.",
};

export default function AboutPage() {
  return (
    <main>
      <Breadcrumb pageName="Página Acerca de Nosotros" />
      <History />
      <CoreValuesSection />
      <Team />
    </main>
  );
}
