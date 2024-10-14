import { AxiosRequestConfig } from "axios";


import Api from "./http-common";


interface HTTPParams<T> {
  method?: AxiosRequestConfig["method"];
  url: string;
  headers?: AxiosRequestConfig["headers"];
  data?: T;
  needToken?: boolean;
  isFormData?: boolean;
  checkRefresh?: boolean;
  version?: string;
}

export interface HTTPResponse<T> {
  status: boolean;
  message: string;
  data: T;
}

export interface IAxoisResponse {
  response: {
    data: {
      detail: string;
      access: string;
    };
    status: number;
    statusText: string;
  };
}

export const httpRequest =
  () =>
  async <T, R>(params: HTTPParams<T>) => {
    const { method, data, url } = params;
    try {
      return await Api<R>({
        method: method,
        data: data,
        url: `/${url}`,
      });
    } catch (error) {
      const err = error as unknown as IAxoisResponse;
     
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data,
        },
      };
    }
  };
