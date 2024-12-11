"use client";
import { AnimalsAndLocation } from "@/components/SaveFriend/AnimalsAndLocation";
import { NavigationControls } from "@/components/SaveFriend/NavigationControls";
import { ReporterInformation } from "@/components/SaveFriend/ReporterInformation";
import { ReportInformation } from "@/components/SaveFriend/ReportInformation";
import { ReviewInformation } from "@/components/SaveFriend/ReviewInformation";
import { StepIndicator } from "@/components/SaveFriend/StepIndicator";
import { initialFormData } from "@/constants/initialFormData";
import { Location, Report } from "@/types/report";
import { useState } from "react";

export default function SaveFriend() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    const finalValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...(prev[parent as keyof Report] as object),
          [child]: finalValue,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: finalValue,
      }));
    }
  };

  const handleAddAnimal = () => {
    setFormData((prev) => ({
      ...prev,
      animals: [
        ...prev.animals,
        {
          name: null,
          image: "",
          description: "",
          coatColor: "",
          specie: "",
          gender: "",
        },
      ],
    }));
  };

  const handleReportImagesUpload = (urls: string[]) => {
    setFormData((prev) => ({
      ...prev,
      images: urls,
    }));
  };

  const handleRemoveAnimal = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      animals: prev.animals.filter((_, i) => i !== index),
    }));
  };

  const handleAnimalChange = (
    index: number,
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updatedAnimals = [...prev.animals];
      updatedAnimals[index] = {
        ...updatedAnimals[index],
        [name]: value,
      };
      return { ...prev, animals: updatedAnimals };
    });
  };

  const handleAnimalImageUpload = (index: number, urls: string[]) => {
    setFormData((prev) => {
      const updatedAnimals = [...prev.animals];
      updatedAnimals[index] = {
        ...updatedAnimals[index],
        image: urls[0], // Asumiendo que para animales solo se sube una imagen
      };
      return { ...prev, animals: updatedAnimals };
    });
  };

  const handleLocationSelect = (location: Location) => {
    setFormData((prev) => ({
      ...prev,
      location: {
        ...prev.location,
        ...location,
      },
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/reports", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Reporte enviado exitosamente");
      }
    } catch (error) {
      console.error("Error al enviar el reporte:", error);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <ReportInformation
            formData={formData}
            handleChange={handleChange}
            handleReportImagesUpload={handleReportImagesUpload}
          />
        );
      case 2:
        return (
          <AnimalsAndLocation
            formData={formData}
            handleAddAnimal={handleAddAnimal}
            handleRemoveAnimal={handleRemoveAnimal}
            handleAnimalChange={handleAnimalChange}
            handleLocationSelect={handleLocationSelect}
            handleAnimalImageUpload={handleAnimalImageUpload}
          />
        );
      case 3:
        return (
          <ReporterInformation
            formData={formData}
            handleChange={handleChange}
          />
        );
      case 4:
        return <ReviewInformation formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-dark flex items-center justify-center p-6 pt-20">
      <div className="bg-white dark:bg-dark-700 shadow-md rounded-lg w-full max-w-6xl p-6">
        <StepIndicator currentStep={currentStep} />

        <form onSubmit={handleSubmit}>
          {renderStep()}

          <NavigationControls
            currentStep={currentStep}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        </form>
      </div>
    </div>
  );
}
