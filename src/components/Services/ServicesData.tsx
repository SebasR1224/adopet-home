import { Service } from "@/types/service";

const ServicesData: Service[] = [
  {
    id: 1,
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 19L5 19"
          stroke="#33363F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 19L7.83576 12.3139C7.92959 11.5633 8.56769 11 9.32417 11H14.6758C15.4323 11 16.0704 11.5633 16.1642 12.3139L17 19"
          stroke="#33363F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 4L12 7"
          stroke="#33363F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.5 9L18 10M3.5 9L6 10"
          stroke="#33363F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.5 5.5L16 7.5M6.5 5.5L8 7.5"
          stroke="#33363F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 14L13.5 14"
          stroke="#33363F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Rescate de Animales",
    paragraph:
      "En Adopet, entendemos la importancia de una respuesta rápida y coordinada para rescatar a los animales en situación de abandono. Nuestro servicio de rescate de animales permite a los usuarios reportar fácilmente casos de abandono a través de la aplicación. Cuando un usuario reporta un animal en situación de calle, nuestra plataforma se encarga de conectar de inmediato con las fundaciones rescatistas cercanas. Estas fundaciones recibirán una notificación detallada que incluye información sobre la ubicación, condición del animal y cualquier otro dato relevante proporcionado por el usuario. Este proceso asegura que los animales en necesidad reciban la atención y el cuidado que requieren de manera oportuna, maximizando las posibilidades de un rescate exitoso y efectivo.",
    btn: "Leer mas",
    btnLink: "/#",
  },
  {
    id: 2,
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.4615 20H4C3.44772 20 3 19.5523 3 19V8C3 5.79086 4.79086 4 7 4H17C19.2091 4 21 5.79086 21 8V11.3846"
          stroke="#222222"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 14H10"
          stroke="#222222"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 10H13"
          stroke="#222222"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="16.5" cy="15.5" r="2.5" stroke="#222222" strokeWidth="2" />
        <path
          d="M18.5 17.5L21.5 20.5"
          stroke="#222222"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Seguimiento",
    paragraph:
      "En Adopet, también ofrecemos un servicio de seguimiento para los animales rescatados. Después del rescate, la persona que reportó el animal puede consultar el estado y el progreso del animal a través de la aplicación. Las fundaciones rescatistas actualizarán regularmente la información sobre la salud, el tratamiento recibido y el bienestar general del animal. Esto proporciona tranquilidad a los usuarios que se preocuparon por el animal y les permite seguir su recuperación y eventual disponibilidad para adopción. Este servicio promueve la transparencia y el compromiso continuo con el bienestar de los animales rescatados.",
    btn: "Leer mas",
    btnLink: "/#",
  },
  {
    id: 3,
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 12.7596C5 11.4019 5 10.723 5.27446 10.1262C5.54892 9.52949 6.06437 9.08769 7.09525 8.20407L8.09525 7.34693C9.95857 5.7498 10.8902 4.95123 12 4.95123C13.1098 4.95123 14.0414 5.7498 15.9047 7.34693L16.9047 8.20407C17.9356 9.08769 18.4511 9.52949 18.7255 10.1262C19 10.723 19 11.4019 19 12.7596V17C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 21 16.8856 21 15 21H9C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17V12.7596Z"
          stroke="#33363F"
          strokeWidth="2"
        />
        <path
          d="M14.5 21V16C14.5 15.4477 14.0523 15 13.5 15H10.5C9.94772 15 9.5 15.4477 9.5 16V21"
          stroke="#33363F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Adopciones",
    paragraph:
      "El servicio de adopciones de Adopet está diseñado para facilitar la búsqueda de hogares permanentes para los animales rescatados. A través de nuestra plataforma, las fundaciones pueden publicar perfiles detallados de los animales disponibles para adopción. Estos perfiles incluyen información esencial sobre el animal, como su edad, raza, características, historia y cualquier necesidad especial que pueda tener. Los usuarios interesados en adoptar pueden explorar estos perfiles, conocer más sobre los animales y ponerse en contacto con las fundaciones para iniciar el proceso de adopción. Al proporcionar una interfaz fácil de usar y accesible, Adopet fomenta la adopción responsable y ayuda a conectar a los animales rescatados con familias amorosas y adecuadas.",
    btn: "Learn More",
    btnLink: "/#",
  },
];
export default ServicesData;
