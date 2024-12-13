export const NavigationControls = ({
  currentStep,
  prevStep,
  nextStep,
}: {
  currentStep: number;
  prevStep: () => void;
  nextStep: () => void;
}) => {
  return (
    <div className="flex justify-between mt-6">
      {currentStep > 1 && (
        <button
          type="button"
          onClick={prevStep}
          className="flex items-center text-gray-600 hover:text-primary"
        >
          Anterior
        </button>
      )}

      {currentStep < 5 && (
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white duration-300 hover:bg-primary/90"
          onClick={nextStep}
        >
          Siguiente
        </button>
      )}

      {currentStep === 5 && (
        <button
          type="submit"
          className="ml-auto flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Enviar Reporte
        </button>
      )}
    </div>
  );
};
