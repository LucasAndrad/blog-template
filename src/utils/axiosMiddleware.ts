import axiosNative, { AxiosResponse } from 'axios';
import { camelizeKeys, decamelizeKeys } from 'humps';

// Convert request response values from snake_case to camelCase
axiosNative.interceptors.response.use((response: AxiosResponse) => {
  if (
    response.data &&
    response.headers['content-type'] === 'application/json'
  ) {
    response.data = camelizeKeys(response.data);
  }

  return response;
});

// Convert request params from camelCase to snake_case
axiosNative.interceptors.request.use((config: any) => {
  const newConfig = { ...config };
  if (newConfig.headers['Content-Type'] === 'multipart/form-data')
    return newConfig;
  if (config.params) {
    newConfig.params = decamelizeKeys(config.params);
  }
  if (config.data) {
    newConfig.data = decamelizeKeys(config.data);
  }

  return newConfig;
});

export const axios = axiosNative;
