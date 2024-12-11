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
    isAnonymous: false,
  },
  animals: [
    {
      name: "",
      image: "",
      description: "",
      coatColor: "",
      specie: "",
      gender: "",
    },
  ],
  location: {
    latitude: 0,
    longitude: 0,
    address: "",
    city: "",
    postalCode: "",
  },
  abandonmentDateTime: "",
};
