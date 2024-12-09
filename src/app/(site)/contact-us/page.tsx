import Breadcrumb from "@/components/common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contáctenos | Adopet",
  description:
    "Esta aplicación permite a la comunidad reportar de manera fácil, rápida y sencilla a animales en situación de abandono.",
};

export default function ContactUs() {
  return (
    <main>
      <Breadcrumb pageName="Contáctenos" />
      <Contact />
    </main>
  );
}
