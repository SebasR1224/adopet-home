export class UploadService {
    private static readonly API_URL = process.env.NEXT_PUBLIC_API_BACKEND;

  static uploadToServer = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append("file", file);

      fetch(`${this.API_URL}/files/upload`, {
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
}