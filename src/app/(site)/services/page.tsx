import Clients from "@/components/Clients";
import Breadcrumb from "@/components/common/Breadcrumb";
import Services from "@/components/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios | Adopet",
  description:
    "Esta aplicación permite a la comunidad reportar de manera fácil, rápida y sencilla a animales en situación de abandono.",
};

export default function Service() {
  return (
    <main>
      <Breadcrumb pageName="Página de Servicios" />
      <Services />
      <Clients />
    </main>
  );
}
