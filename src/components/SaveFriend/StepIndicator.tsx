export const StepIndicator = ({ currentStep }: { currentStep: number }) => {
  return (
    <div className="flex justify-between mb-6">
      {[1, 2, 3, 4, 5].map((step) => (
        <div
          key={step}
          className={`w-10 h-1 rounded-full ${
            currentStep >= step ? "bg-primary" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
};
