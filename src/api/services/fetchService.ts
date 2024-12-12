import toast from 'react-hot-toast';

interface ApiError {
  type: string;
  title: string;
  status: number;
  errors?: Record<string, string[]>;
  traceId?: string;
}

export class FetchService {
  private static readonly API_URL = process.env.NEXT_PUBLIC_API_BACKEND;

  private static async handleResponse<T>(response: Response): Promise<T> {
    const data = await response.json();

    if (!response.ok) {
      const error: ApiError = data;

      if (error.errors) {
        const errorMessages = Object.entries(error.errors)
          .map(([key, messages]) => `${key}: ${messages.join(', ')}`)
          .join('\n');
        throw new Error(errorMessages || error.title);
      }

      throw new Error(error.title || 'Ha ocurrido un error');
    }

    return data;
  }

  static async fetch<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    try {
      const {
        ...fetchOptions
      } = options;

      const url = `${this.API_URL}${endpoint}`;
      const response = await fetch(url, {
        ...fetchOptions,
        headers: {
          'Content-Type': 'application/json',
          ...fetchOptions.headers,
        },
      });

      const data = await this.handleResponse<T>(response);

      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      } else {
        throw new Error('Ha ocurrido un error inesperado');
      }
    }
  }
}