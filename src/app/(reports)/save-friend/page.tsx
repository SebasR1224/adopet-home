"use client";
import { ReportAbandonmentService } from "@/api/services/reportAbandonmentService";
import { AnimalsAndLocation } from "@/components/SaveFriend/AnimalsAndLocation";
import { NavigationControls } from "@/components/SaveFriend/NavigationControls";
import { ReporterInformation } from "@/components/SaveFriend/ReporterInformation";
import { ReportInformation } from "@/components/SaveFriend/ReportInformation";
import { ReviewInformation } from "@/components/SaveFriend/ReviewInformation";
import { StepIndicator } from "@/components/SaveFriend/StepIndicator";
import { initialFormData } from "@/constants/initialFormData";
import { Location, Report } from "@/types/report";
import { validateAnimalsAndLocation, validateReporterInformation, validateReportInformation } from "@/utils/formValidations";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

export default function SaveFriend() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState<string[]>([]);
  const [submitErrors, setSubmitErrors] = useState<string[]>([]);

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
        image: urls[0],
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

  const validateCurrentStep = (): boolean => {
    let stepErrors: string[] = [];

    switch (currentStep) {
      case 1:
        stepErrors = validateReportInformation(formData);
        break;
      case 2:
        stepErrors = validateAnimalsAndLocation(formData);
        break;
      case 3:
        stepErrors = validateReporterInformation(formData);
        break;
    }

    setErrors(stepErrors);
    return stepErrors.length === 0;
  };

  const nextStep = () => {
    if (validateCurrentStep()) {
      if (currentStep < 4) {
        setCurrentStep(currentStep + 1);
        setErrors([]);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setErrors([]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitErrors([]);

    try {
      await ReportAbandonmentService.createReport(formData);
      toast.success('¡Reporte creado exitosamente!');
      setTimeout(() => {
        router.push('/');
      }, 1500);
      setFormData(initialFormData);
      setCurrentStep(1);
    } catch (error) {
      if (error instanceof Error) {
        setSubmitErrors([error.message]);
        toast.error('Error al crear el reporte');
      }
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
      <Toaster position="top-right" />
      <div className="bg-white dark:bg-dark-700 shadow-md rounded-lg w-full max-w-6xl p-6">
        <StepIndicator currentStep={currentStep} />

        <form onSubmit={handleSubmit}>
           {(errors.length > 0 || submitErrors.length > 0) && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded">
              <p className="text-red-600 font-medium mb-2">
                Por favor corrige los siguientes errores:
              </p>
              <ul className="list-disc list-inside">
                {errors.map((error, index) => (
                  <li key={`validation-${index}`} className="text-red-500">
                    {error}
                  </li>
                ))}
                {submitErrors.map((error, index) => (
                  <li key={`submit-${index}`} className="text-red-500">
                    {error}
                  </li>
                ))}
              </ul>
            </div>
          )}

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
