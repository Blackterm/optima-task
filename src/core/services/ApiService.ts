import type { App } from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import type { AxiosResponse } from "axios";

/**
 * @description service to call HTTP request via Axios
 */
class ApiService {
  /**
   * @description property to share vue instance
   */
  public static vueInstance: App;

  /**
   * @description initialize vue axios
   */
  public static init(app: App<Element>) {
    ApiService.vueInstance = app;
    ApiService.vueInstance.use(VueAxios, axios);
    ApiService.vueInstance.axios.defaults.baseURL = import.meta.env.VITE_AUTH_APP_API_URL;
    ApiService.vueInstance.axios.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        if (error.response.data.error)
        return Promise.reject(error);
      }
    );
  }

 
  /**
   * @description send the GET HTTP request
   * @param resource: string
   * @returns Promise<AxiosResponse>
   */
  public static get (
    resource: string,
  ): Promise<AxiosResponse>  {
    return ApiService.vueInstance.axios.get(`${resource}${import.meta.env.VITE_AUTH_APP_API_KEY}`);
  }

 
}

export default ApiService;
