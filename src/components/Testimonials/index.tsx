import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "María López",
    designation: "Directora @ Fundación Patitas Felices",
    content:
      "Adopet ha sido una herramienta fundamental para nuestra fundación. Nos ha permitido conectar con más rescatistas y encontrar hogares amorosos para muchos animales.",
    image: "/images/testimonials/author-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    designation: "Fundador @ Amigos Peludos",
    content:
      "Desde que empezamos a usar Adopet, hemos visto un aumento significativo en las adopciones. La plataforma es fácil de usar y muy efectiva.",
    image: "/images/testimonials/author-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Ana Martínez",
    designation: "Coordinadora @ Salvando Huellitas",
    content:
      "Gracias a Adopet, hemos podido rescatar y reubicar a muchos más animales. Es una herramienta indispensable para cualquier organización de rescate.",
    image: "/images/testimonials/author-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]">
      <div className="container px-4">
        <SectionTitle
          subtitle="Testimonios"
          title="Lo que dicen nuestros colaboradores"
          paragraph="Adopet ha transformado la forma en que las fundaciones y rescatistas operan, facilitando el reporte y rescate de animales abandonados. Aquí están algunas palabras de nuestros colaboradores."
          width="640px"
          center
        />

        <div className="mt-[60px] flex flex-wrap lg:mt-20 gap-y-8">
          {testimonialData.map((testimonial, i) => (
            <SingleTestimonial key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
