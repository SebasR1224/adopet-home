import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const History = () => {
  return (
    <section className="relative z-10 overflow-hidden py-20 lg:py-[115px] bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Conócenos"
          title="Nuestra Historia"
          paragraph="En 2023, un grupo de estudiantes de Ingeniería de Software de la Universidad Iberoamericana identificó el problema del abandono de animales en Facatativá, Colombia. Los ciudadanos no podían reportar rápidamente los animales abandonados, y muchas fundaciones no conocían todos los casos."
          width="640px"
          center
        />
        <div className="-mx-4 flex flex-wrap items-center mt-[60px] lg:mt-20">
          <div className="w-full px-4 md:w-1/2">
            <div className="mb-8 md:mb-0 w-full h-[400px] overflow-hidden rounded-lg shadow-lg">
              <Image
                width={600}
                height={400}
                src="/images/history/history-1.jpeg"
                alt="Historia de Adopet"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2">
            <div className="mb-8 md:mb-0 w-full h-[400px] overflow-hidden rounded-lg shadow-lg">
              <Image
                width={600}
                height={400}
                src="/images/history/history-2.jpeg"
                alt="Historia de Adopet"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
