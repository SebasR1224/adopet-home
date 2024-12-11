import { Report } from "@/types/report";
import { CardTitle } from "./CardTitle";

export const ReporterInformation = ({
  formData,
  handleChange,
}: {
  formData: Report;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div>
      <CardTitle
        title="Información del Reportante"
        description="Ingresa los datos del reportante"
      />
      <div className=" grid grid-cols-2 gap-4">
        <input
          type="text"
          name="reporter.name"
          value={formData.reporter.name}
          onChange={handleChange}
          placeholder="Nombre"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="reporter.lastName"
          value={formData.reporter.lastName}
          onChange={handleChange}
          placeholder="Apellido"
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="reporter.email"
          value={formData.reporter.email}
          onChange={handleChange}
          placeholder="Correo electrónico"
          className="w-full p-2 border rounded"
        />
        <input
          type="tel"
          name="reporter.phoneNumber"
          value={formData.reporter.phoneNumber}
          onChange={handleChange}
          placeholder="Número de teléfono"
          className="w-full p-2 border rounded"
        />
      </div>
    </div>
  );
};
