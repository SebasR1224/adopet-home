import { Location, Report } from "@/types/report";
import { LocationPicker } from "../Map/LocationPicker";
import { CardTitle } from "./CardTitle";
import { ImageUploader } from "../ImageUploader";
import { ConfigService } from "@/api/services/configService";
import { useEffect, useState } from "react";
import { Breed, Species } from "@/api/models/config";

const genderOptions = [
  { value: "MALE", label: "Macho" },
  { value: "FEMALE", label: "Hembra" },
];

export const AnimalsAndLocation = ({
  formData,
  handleAddAnimal,
  handleRemoveAnimal,
  handleAnimalChange,
  handleLocationSelect,
  handleAnimalImageUpload,
}: {
  formData: Report;
  handleAddAnimal: () => void;
  handleRemoveAnimal: (index: number) => void;
  handleAnimalChange: (
    index: number,
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  handleLocationSelect: (location: Location) => void;
  handleAnimalImageUpload: (index: number, urls: string[]) => void;
}) => {
  const [species, setSpecies] = useState<Species[]>([]);

  useEffect(() => {
    const fetchSpecies = async () => {
      try {
        const response = await ConfigService.getSpecies();
        setSpecies(response);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchSpecies();
  }, []);

  const getBreedsBySpecieId = (specieValue: string): Breed[] => {
    const selectedSpecie = species.find(s => s.value === specieValue);
    return selectedSpecie?.breeds || [];
  };

  return (
    <div>
      <CardTitle
        title="Detalles de los Animales"
        description="Ingresa los datos de los animales y ubicación"
      />
      {formData.animals.map((animal, index) => (
        <div key={index} className="border p-4 mb-4 rounded relative">
          <button
            type="button"
            className="absolute top-2 right-2 bg-white rounded-md p-1 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            onClick={() => handleRemoveAnimal(index)}
          >
            <span className="sr-only">Close menu</span>
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="grid grid-cols-2 gap-4 pt-8">
            <input
              type="text"
              name="name"
              value={animal.name || ""}
              onChange={(e) => handleAnimalChange(index, e)}
              placeholder="Nombre del animal (opcional)"
              className="w-full p-2 border rounded col-span-2"
            />
             <select
              name="specie"
              value={animal.specie}
              onChange={(e) => handleAnimalChange(index, e)}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Selecciona especie</option>
              {species.map((specie) => (
                <option key={specie.id} value={specie.value}>
                  {specie.value}
                </option>
              ))}
            </select>
             <select
            name="breed"
            value={animal.breed || ""}
            onChange={(e) => handleAnimalChange(index, e)}
            className="w-full p-2 border rounded"
            disabled={!animal.specie}
          >
            <option value="">Selecciona raza</option>
            {animal.specie && getBreedsBySpecieId(animal.specie).map((breed) => (
              <option key={breed.id} value={breed.id}>
                {breed.value}
              </option>
            ))}
          </select>
            <select
              name="gender"
              value={animal.gender}
              onChange={(e) => handleAnimalChange(index, e)}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Selecciona género</option>
              {genderOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <input
              type="number"
              name="age"
              value={animal.age}
              onChange={(e) => handleAnimalChange(index, e)}
              placeholder="Edad (opcional)"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="number"
              name="weight"
              value={animal.weight}
              onChange={(e) => handleAnimalChange(index, e)}
              placeholder="Peso (opcional)"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              name="coatColor"
              value={animal.coatColor}
              onChange={(e) => handleAnimalChange(index, e)}
              placeholder="Color de pelaje"
              className="w-full p-2 border rounded"
              required
            />
            <textarea
              name="description"
              value={animal.description}
              onChange={(e) => handleAnimalChange(index, e)}
              placeholder="Descripción del animal"
              className="w-full p-2 border rounded col-span-2"
              rows={3}
              required
            />
            <div key={index} className="col-span-2">
              <ImageUploader
                multiple={false}
                onImagesUpload={(urls) => handleAnimalImageUpload(index, urls)}
                label={`animal-${index}`}
                initialImages={animal.image ? [animal.image] : []}
              />
            </div>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddAnimal}
        className="w-full bg-secondary mb-4 text-sm text-white rounded hover:bg-secondary/90"
      >
        Añadir Animal
      </button>
      <h3 className="text-xl font-bold mt-6 mb-4">Ubicación del Abandono</h3>
      <LocationPicker
        onLocationSelect={handleLocationSelect}
        initialLocation={{
          latitude: formData.location.latitude || 4.809669,
          longitude: formData.location.longitude || -74.354146,
        }}
      />
    </div>
  );
};
