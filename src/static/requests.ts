import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { SERVER } from "./links";

class RequestService {
  private axiosInstance;

  constructor() {
    // Customize the axios instance (base URL, headers, etc.)
    this.axiosInstance = axios.create({
      baseURL: SERVER,
      timeout: 5000,
      headers: {
        "Content-Type": "application/json",
        // Add any other headers you need
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
  ): Promise<any> {
    try {
      const response = await this.axiosInstance.post<T>(url, data, config);
      return response;
    } catch (err: any) {
      return err["response"];
    }
  }

  async put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<any> {
    const response = await this.axiosInstance.put<T>(url, data, config);
    return response;
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<any> {
    const response = await this.axiosInstance.delete<T>(url, config);
    return response;
  }
}
const requestService = new RequestService();
export default requestService;
