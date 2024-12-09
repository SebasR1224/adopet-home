import Image from "next/image";

interface HelpOptionProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
}

const HelpOption: React.FC<HelpOptionProps> = ({
  imageSrc,
  altText,
  title,
  description,
}) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3 mb-8">
      <div className="p-6 bg-white rounded-lg shadow-lg h-full flex flex-col dark:bg-dark dark:text-white">
        <Image
          width={300}
          height={300}
          src={imageSrc}
          alt={altText}
          className="mb-4 w-full h-48 object-cover rounded-lg"
        />
        <h3 className="mb-4 text-xl font-semibold text-primary dark:text-white">
          {title}
        </h3>
        <p className="text-base text-body-color flex-grow dark:text-dark-6">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HelpOption;
