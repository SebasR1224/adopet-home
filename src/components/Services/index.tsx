import SectionTitle from "../Common/SectionTitle";
import SingleService from "./SingleFeature";
import ServicesData from "./ServicesData";

const Services = () => {
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subtitle="Servicios"
          title="Principales Servicios de Adopet"
          paragraph="Adopet ofrece una plataforma para facilitar el reporte y adopción de animales abandonados, conectando a rescatistas y personas dispuestas a darles una segunda oportunidad."
        />

        <div className="-mx-4 mt-12 flex flex-wrap lg:mt-20">
          {ServicesData.map((feature, i) => (
            <SingleService key={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
