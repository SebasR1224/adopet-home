import { Location, Report } from "@/types/report";
import { LocationPicker } from "../Map/LocationPicker";
import { CardTitle } from "./CardTitle";

export const LocationInformation = ({
    formData,
    handleLocationSelect
}: {
    formData: Report;
    handleLocationSelect: (location: Location) => void;
}) => {
  return (
    <div>
        <CardTitle
            title="Ubicación del Abandono"
            description="Selecciona la ubicación del abandono"
        />
        <div className="grid grid-cols-2 gap-4 pt-4 mb-4">
         <input
              type="text"
              name="address"
              value={formData.location.address || ""}
              disabled
              className="w-full p-2 border rounded col-span-2"
            />
            <input
              type="text"
              name="city"
              value={formData.location.city || ""}
              disabled
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="postalCode"
              value={formData.location.postalCode || ""}
              disabled
              className="w-full p-2 border rounded"
            />
        </div>

        <LocationPicker
            onLocationSelect={handleLocationSelect}
        />
    </div>
  );
};
