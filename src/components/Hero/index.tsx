import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]"
      >
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 px-4">
              <div
                className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center lg:text-left"
                data-wow-delay=".2s"
              >
                <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-4xl lg:leading-[1.2]">
                  Adopet Uniendo Comunidades y Rescatistas
                </h1>
                <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                  <strong>¡Haz la diferencia hoy!</strong> Rescata a un amigo
                  peludo y cambia una vida para siempre. Los animales
                  abandonados te necesitan. Darles una segunda oportunidad no
                  solo transforma sus vidas, sino también la tuya.
                </p>
                <ul className="mb-10 flex flex-wrap items-center justify-center lg:justify-start gap-5">
                  <li>
                    <Link
                      href="/save-friend"
                      className="inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2"
                    >
                      Salva a un Amigo
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full lg:w-1/2 p-4">
              <div
                className="wow fadeInUp relative z-10 mx-auto max-w-[845px]"
                data-wow-delay=".25s"
              >
                <div className="mt-16 lg:mt-0">
                  <Image
                    src="/images/hero/hero-image.png"
                    alt="hero"
                    className="mx-auto max-w-full rounded-t-xl rounded-tr-xl"
                    width={845}
                    height={316}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
