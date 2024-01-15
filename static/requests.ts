import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { SERVER } from "./links";

export default class RequestService {
  private axiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: SERVER,
      timeout: 5000,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<any> {
    const response = await this.axiosInstance.get<T>(url, config);
    return response;
  }

  async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.axiosInstance.post<T>(url, data, config);
    return response.data;
  }

  async put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.axiosInstance.put<T>(url, data, config);
    return response.data;
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.delete<T>(url, config);
    return response.data;
  }
}
