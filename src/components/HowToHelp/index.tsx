import React from "react";
import HelpOption from "./HelpOption";

const HowToHelp: React.FC = () => {
  const helpOptions = [
    {
      imageSrc: "/images/help/volunteer.jpeg",
      altText: "Voluntariado",
      title: "Voluntariado",
      description:
        "Únete a nuestro equipo de voluntarios y ayuda en eventos, campañas de rescate, y más. Tu tiempo y esfuerzo pueden salvar vidas.",
    },
    {
      imageSrc: "/images/help/donate.jpg",
      altText: "Donaciones",
      title: "Donaciones",
      description:
        "Apoya nuestra causa con una donación. Cada contribución cuenta y nos ayuda a proporcionar cuidado y refugio a los animales necesitados.",
    },
    {
      imageSrc: "/images/help/adopt.jpg",
      altText: "Adopciones",
      title: "Adopciones",
      description:
        "Dale a un animal una segunda oportunidad en la vida adoptando. Consulta nuestras listas de animales disponibles y encuentra tu nuevo mejor amigo.",
    },
    {
      imageSrc: "/images/help/share.png",
      altText: "Difusión",
      title: "Difusión",
      description:
        "Ayuda a correr la voz sobre nuestra misión. Comparte nuestras publicaciones en redes sociales y habla a tus amigos y familiares sobre Adopet.",
    },
  ];

  return (
    <section className="relative z-10 overflow-hidden  dark:bg-dark py-20 lg:py-[115px] dark:bg-dark-1">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold text-dark md:text-[38px] md:leading-[1.44] dark:text-white">
            Únete a Nuestra Misión
          </h2>
          <p className="mx-auto max-w-[640px] text-base leading-[1.5] text-body-color dark:text-dark-6">
            En Adopet, creemos que todos pueden hacer una diferencia. Aquí hay
            algunas maneras en las que puedes ayudar a nuestra misión de
            rescatar y reubicar animales abandonados.
          </p>
        </div>
        <div className="flex flex-wrap -mx-4">
          {helpOptions.map((option, index) => (
            <HelpOption
              key={index}
              imageSrc={option.imageSrc}
              altText={option.altText}
              title={option.title}
              description={option.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;
