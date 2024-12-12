import { Report } from "@/types/report";

export const validateReportInformation = (formData: Report): string[] => {
  const errors: string[] = [];

  if (!formData.title?.trim()) {
    errors.push("El título es requerido");
  }

  if (!formData.description?.trim()) {
    errors.push("La descripción es requerida");
  }

  if (!formData.abandonmentDateTime) {
    errors.push("La fecha y hora del abandono son requeridas");
  }

  if (!formData.abandonmentStatus) {
    errors.push("El estado del abandono es requerido");
  }

  if (!formData.images || formData.images.length === 0) {
    errors.push("Debe agregar al menos una imagen");
  }

  return errors;
};

export const validateAnimalsAndLocation = (formData: Report): string[] => {
  const errors: string[] = [];

  if (!formData.animals.length) {
    errors.push("Debe agregar al menos un animal");
    return errors;
  }

  formData.animals.forEach((animal, index) => {
    if (!animal.specie) {
      errors.push(`Animal ${index + 1}: La especie es requerida`);
    }
    if (!animal.gender) {
      errors.push(`Animal ${index + 1}: El género es requerido`);
    }
    if (!animal.coatColor) {
      errors.push(`Animal ${index + 1}: El color de pelaje es requerido`);
    }
    if (!animal.description) {
      errors.push(`Animal ${index + 1}: La descripción es requerida`);
    }
  });

  /*if (!formData.location.latitude || !formData.location.longitude) {
    errors.push("Debe seleccionar una ubicación en el mapa");
  }*/

  return errors;
};

export const validateReporterInformation = (formData: Report): string[] => {
  const errors: string[] = [];
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?[\d\s-]{8,}$/;

  if (!formData.reporter.name?.trim()) {
    errors.push("El nombre es requerido");
  }

  if (!formData.reporter.lastName?.trim()) {
    errors.push("El apellido es requerido");
  }

  if (!formData.reporter.email?.trim()) {
    errors.push("El correo electrónico es requerido");
  } else if (!emailRegex.test(formData.reporter.email)) {
    errors.push("El correo electrónico no es válido");
  }

  if (!formData.reporter.phoneNumber?.trim()) {
    errors.push("El número de teléfono es requerido");
  } else if (!phoneRegex.test(formData.reporter.phoneNumber)) {
    errors.push("El número de teléfono no es válido");
  }

  return errors;
};