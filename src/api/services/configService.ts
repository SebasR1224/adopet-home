export class ConfigService {
  static url = process.env.NEXT_PUBLIC_API_BACKEND + "/species";

  public static async getSpecies() {
    const response = await fetch(this.url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 60 * 60 * 24,
      },
    });
    return response.json();
  }
}
