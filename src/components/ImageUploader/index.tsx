import React, { useEffect, useState } from "react";
import { UploadService } from "@/api/services/uploadService";
import PreviewImages from "./PreviewImages";
import toast from "react-hot-toast";

export const ImageUploader = ({
  label,
  description = "Agregar Imágenes",
  multiple = false,
  maxImages = 5,
  onImagesUpload,
  initialImages = [],
}: {
  label?: string;
  description?: string;
  multiple?: boolean;
  maxImages?: number;
  onImagesUpload: (urls: string[]) => void;
  initialImages?: string[];
}) => {
  const [previews, setPreviews] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    setPreviews(initialImages);
  }, [initialImages]);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files);

      if (multiple && previews.length + fileArray.length > maxImages) {
        toast.error(`Solo puedes subir hasta ${maxImages} imágenes`);
        return;
      }

      await uploadImages(multiple ? fileArray : fileArray.slice(0, 1));
    }
  };

  const uploadImages = async (filesToUpload: File[]) => {
    setUploading(true);
    const uploadedUrls: string[] = [];

    try {
      for (const file of filesToUpload) {
        const url = await UploadService.uploadToServer(file);
        if (!previews.includes(url)) {
          uploadedUrls.push(url);
        } else {
          toast.error('Una o más imágenes ya han sido agregadas');
        }
      }

      const newPreviews = multiple
        ? [...previews, ...uploadedUrls].slice(0, maxImages)
        : uploadedUrls;

      setPreviews(newPreviews);
      onImagesUpload(newPreviews);
    } catch (error) {
      console.error("Error de subida:", error);
      toast.error("No se pudieron subir todas las imágenes");
    } finally {
      setUploading(false);
    }
  };



  const removeImage = (indexToRemove: number) => {
    const newPreviews = previews.filter((_, index) => index !== indexToRemove);
    setPreviews(newPreviews);
    onImagesUpload(newPreviews);
  };

  return (
    <div>
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor={`image-upload-${label}`}
          className={`flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 ${
            multiple && previews.length >= maxImages ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">{description}</span>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
            {multiple && (
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {previews.length} de {maxImages} imágenes
              </p>
            )}
          </div>
          <input
            type="file"
            id={`image-upload-${label}`}
            accept="image/*"
            multiple={multiple}
            onChange={handleImageChange}
            className="hidden"
            disabled={multiple && previews.length >= maxImages}
          />
        </label>
      </div>
      {previews.length > 0 && <PreviewImages images={previews} removeImage={removeImage} />}

      {uploading && <div className="text-blue-500">Subiendo...</div>}
    </div>
  );
};

export default ImageUploader;
