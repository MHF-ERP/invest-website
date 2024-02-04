import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { SERVER } from "./links";
import { RESPONSE } from "./interface";

class RequestService {
  private axiosInstance;

  constructor() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // Customize the axios instance (base URL, headers, etc.)
    this.axiosInstance = axios.create({
      baseURL: SERVER,

      // headers: {
      //   "Content-Type": "application/json",

      //   // Add any other headers you need
      // },
    });
  }

  async get<T>(
    url: string,
    token?: string,
    config?: AxiosRequestConfig
  ): Promise<RESPONSE> {
    let headers;
    if (token) {
      headers = {
        ...config?.headers,
        Authorization: `Bearer ${token}`,
      };
    } else {
      headers = {
        ...config?.headers,
      };
    }
    try {
      const response = await this.axiosInstance.get<T>(url, {
        ...config,
        headers,
      });
      console.log("hih");
      console.log(response.status);
      if (response.status === 401) {
        window.location.href = "/";
      }
      return response;
    } catch (error) {
      console.error("Error during HTTP request:", error);
      throw error;
    }
  }

  async post<T>(
    url: string,
    token?: string,
    form?: boolean,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<RESPONSE> {
    let headers;
    if (token) {
      headers = {
        ...config?.headers,
        Authorization: `Bearer ${token}`,
        "Content-Type": `${form ? "multipart/form-data" : "application/json"} `,
      };
    } else {
      headers = {
        ...config?.headers,
        "Content-Type": `${form ? "multipart/form-data" : "application/json"}`,
      };
    }
    try {
      const axiosResponse = await this.axiosInstance.post<T>(url, data, {
        ...config,
        headers,
      });
      return axiosResponse;
    } catch (err: any) {
      return err.response as RESPONSE;
    }
  }
  async tokenPost<T>(
    url: string,
    token: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<RESPONSE> {
    const headers = {
      ...config?.headers,
      Authorization: `Bearer ${token}`,
    };
    try {
      const axiosResponse = await this.axiosInstance.post<T>(url, data, {
        ...config,
        headers,
      });
      return axiosResponse;
    } catch (err: any) {
      return err.response as RESPONSE;
    }
  }
  async put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<RESPONSE> {
    const response = await this.axiosInstance.put<T>(url, data, config);
    return response;
  }

  async delete<T>(
    url: string,
    token?: string,
    config?: AxiosRequestConfig
  ): Promise<any> {
    let headers;
    if (token) {
      headers = {
        ...config?.headers,
        Authorization: `Bearer ${token}`,
      };
    } else {
      headers = {
        ...config?.headers,
      };
    }
    const response = await this.axiosInstance.delete<T>(url, {
      ...config,
      headers,
    });
    return response;
  }
}
const requestService = new RequestService();
export default requestService;
