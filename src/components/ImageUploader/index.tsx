import React, { useState } from "react";

import Image from "next/image";

export const ImageUploader = ({
  label = "Agregar Imágenes",
  multiple = false,
  maxImages = 5,
  onImagesUpload,
}: {
  label?: string;
  multiple?: boolean;
  maxImages?: number;
  onImagesUpload: (urls: string[]) => void;
}) => {
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files);

      const newFiles = multiple
        ? [...images, ...fileArray].slice(0, maxImages)
        : fileArray.slice(0, 1);

      const newPreviews = newFiles.map((file) => URL.createObjectURL(file));

      setImages(newFiles);
      setPreviews(newPreviews);

      await uploadImages(newFiles);
    }
  };

  const uploadImages = async (filesToUpload: File[]) => {
    setUploading(true);
    const uploadedUrls: string[] = [];

    try {
      for (const file of filesToUpload) {
        const url = await uploadToServer(file);
        uploadedUrls.push(url);
      }

      onImagesUpload(uploadedUrls);
    } catch (error) {
      console.error("Error de subida:", error);
      alert("No se pudieron subir todas las imágenes");
    } finally {
      setUploading(false);
    }
  };

  const uploadToServer = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append("file", file);

      fetch("/api/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Subida fallida");
          }
          return response.json();
        })
        .then((data) => resolve(data.url))
        .catch(reject);
    });
  };

  const removeImage = (indexToRemove: number) => {
    setImages((prev) => prev.filter((_, index) => index !== indexToRemove));
    setPreviews((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="image-upload"
          className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">{label}</span>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            multiple={multiple}
            onChange={handleImageChange}
            className="hidden"
          />
        </label>
      </div>
      {previews.length > 0 && (
        <div className="flex flex-wrap space-x-2 mt-4">
          {previews.map((preview, index) => (
            <div
              key={index}
              className="relative w-24 h-24 border rounded overflow-hidden mb-2"
            >
              <Image
                width={100}
                height={100}
                src={preview}
                alt={`Preview ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 15L10 12"
                    stroke="#fff"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M14 15L14 12"
                    stroke="#fff"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M3 7H21V7C20.0681 7 19.6022 7 19.2346 7.15224C18.7446 7.35523 18.3552 7.74458 18.1522 8.23463C18 8.60218 18 9.06812 18 10V16C18 17.8856 18 18.8284 17.4142 19.4142C16.8284 20 15.8856 20 14 20H10C8.11438 20 7.17157 20 6.58579 19.4142C6 18.8284 6 17.8856 6 16V10C6 9.06812 6 8.60218 5.84776 8.23463C5.64477 7.74458 5.25542 7.35523 4.76537 7.15224C4.39782 7 3.93188 7 3 7V7Z"
                    stroke="#fff"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M10.0681 3.37059C10.1821 3.26427 10.4332 3.17033 10.7825 3.10332C11.1318 3.03632 11.5597 3 12 3C12.4403 3 12.8682 3.03632 13.2175 3.10332C13.5668 3.17033 13.8179 3.26427 13.9319 3.37059"
                    stroke="#fff"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}

      {uploading && <div className="text-blue-500">Subiendo...</div>}
    </div>
  );
};

export default ImageUploader;
