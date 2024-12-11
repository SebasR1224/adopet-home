import { Report } from "@/types/report";
import { CardTitle } from "./CardTitle";

export const ReviewInformation = ({ formData }: { formData: Report }) => {
  return (
    <div>
      <CardTitle
        title="Revisar Información"
        description="Revisa los datos del reporte"
      />
      <div className="space-y-4 bg-gray-50 p-4 rounded">
        <div>
          <strong>Título:</strong> {formData.title}
        </div>
        <div>
          <strong>Descripción:</strong> {formData.description}
        </div>
        <div>
          <strong>Reportante:</strong> {formData.reporter.name}{" "}
          {formData.reporter.lastName}
        </div>
        <div>
          <strong>Contacto:</strong> {formData.reporter.email} /{" "}
          {formData.reporter.phoneNumber}
        </div>
        <div>
          <strong>Ubicación:</strong> {formData.location.address},{" "}
          {formData.location.city}, {formData.location.postalCode}
        </div>
        <div>
          <strong>Animales Reportados:</strong>
          {formData.animals.map((animal, index) => (
            <div key={index} className="ml-4 mt-2 p-2 bg-white rounded">
              <div>Nombre: {animal.name || "Sin nombre"}</div>
              <div>Especie: {animal.specie}</div>
              <div>Género: {animal.gender}</div>
              <div>Edad: {animal.age}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
