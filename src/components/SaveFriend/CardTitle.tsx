export const CardTitle = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="mb-6">
    <h2 className="text-xl font-bold">{title}</h2>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);
