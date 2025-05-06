import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

axios.defaults.baseURL = "/api"; // Centralized base URL

interface ApiRequestOptions extends AxiosRequestConfig {
  onSuccess?: (response: AxiosResponse) => void;
  onError?: (error: any) => void;
}

export const makeApiRequest = (
  endpoint: string,
  method: 'get' | 'post' | 'put' | 'delete',
  data?: any,
  options?: ApiRequestOptions
): Promise<AxiosResponse<any>> => {
  const { onSuccess, onError, ...axiosOptions } = options || {};

  return axios({
    url: endpoint,
    method,
    data,
    timeout: 15000, // 15 seconds timeout
    ...axiosOptions,
  })
    .then((response) => {
      if (onSuccess) {
        onSuccess(response);
      }
      if (process.env.NODE_ENV === 'development') {
        console.log("API Response:", response);
      }
      return response;
    })
    .catch((error: any) => {
      const formattedError = {
        status: error?.response?.status,
        message: error?.response?.data?.message || error?.message || "Unknown Error",
        data: error?.response?.data,
      };

      if (onError) {
        onError(formattedError);
      }
      if (process.env.NODE_ENV === 'development') {
        console.error("API Error:", formattedError);
      }
      throw formattedError;
    });
};

