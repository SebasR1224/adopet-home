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
    latitude: 0,
    longitude: 0,
    address: "",
    city: "",
    postalCode: "",
  },
  abandonmentDateTime: new Date().toISOString(),
};
