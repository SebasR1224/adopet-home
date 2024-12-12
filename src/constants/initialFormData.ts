import { Report } from "@/types/report";

export const initialFormData: Report = {
  title: "",
  description: "",
  images: [],
  reporter: {
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    isAnonymous: true,
  },
  animals: [
    {
      name: "",
      image: "",
      description: "",
      coatColor: "",
      specie: "",
      gender: "",
      age: 0,
      weight: 0,
      breed: "",
    },
  ],
  location: {
    latitude: 4.809669,
    longitude: -74.354146,
    address: "Av. 9 de Julio 1190",
    city: "Buenos Aires",
    postalCode: "C1000",
  },
  abandonmentDateTime: new Date().toISOString(),
};
