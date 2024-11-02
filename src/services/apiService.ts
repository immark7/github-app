/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance } from "axios";

export class ApiService {
  protected axios: AxiosInstance;

  constructor(baseUrl: string) {
    this.axios = axios.create({ baseURL: baseUrl });
  }

  protected async get<T>(url: string) {
    const response = await this.axios.get<T>(url);
    return response.data;
  }

  protected async post<T>(url: string, data?: any) {
    const response = await this.axios.post<T>(url, data);
    return response.data;
  }

  protected async put<T>(url: string, data?: any) {
    const response = await this.axios.put<T>(url, data);
    return response.data;
  }

  protected async delete<T>(url: string): Promise<T> {
    const response = await this.axios.delete(url);
    return response.data;
  }
}
