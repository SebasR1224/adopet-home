import { Report } from "@/types/report";
import { CardTitle } from "./CardTitle";
import { ImageUploader } from "../ImageUploader";

export const ReportInformation = ({
  formData,
  handleChange,
  handleReportImagesUpload,
}: {
  formData: Report;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  handleReportImagesUpload: (urls: string[]) => void;
}) => {
  return (
    <div>
      <CardTitle
        title="Información del Reporte"
        description="Ingresa los datos del reporte"
      />
      <div className="space-y-4 grid grid-cols-2 gap-4">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Título del Reporte"
          className="w-full p-2 border rounded col-span-2"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Descripción detallada"
          className="w-full p-2 border rounded col-span-2"
          rows={4}
          required
        />
        <input
          type="datetime-local"
          name="abandonmentDateTime"
          value={formData.abandonmentDateTime}
          onChange={handleChange}
          placeholder="Fecha y hora del abandono"
          className="w-full p-2 border rounded"
          required
        />
        <select
          name="abandonmentStatus"
          value={formData.abandonmentStatus}
          onChange={handleChange}
          className="w-full p-2 border rounded "
          required
        >
          <option value="">Selecciona una opción</option>
          <option value="Critical">Crítico</option>
          <option value="Urgent">Urgente</option>
          <option value="Normal">Normal</option>
        </select>
        <div className="col-span-2">
          <ImageUploader
            multiple={true}
            maxImages={5}
            onImagesUpload={handleReportImagesUpload}
          />
        </div>
      </div>
    </div>
  );
};
