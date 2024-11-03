/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance } from "axios";
import { ERROR_MESSAGES } from "../libs/constants";

export class ApiService {
  protected axios: AxiosInstance;

  constructor(baseUrl: string) {
    this.axios = axios.create({ baseURL: baseUrl });
    this.axios.interceptors.response.use(
      (response) => response,
      (error) => {
        const status = error?.response?.status;
        const message = ERROR_MESSAGES[status] || ERROR_MESSAGES["Default"];
        throw new Error(message);
      }
    );
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
