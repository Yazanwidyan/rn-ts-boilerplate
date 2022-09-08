import axios from 'axios';
import {store} from '@APPNAME/redux/store';
import {BASE_URL} from '@env';
import {showLoading} from '@APPNAME/redux/loading.reducer';
export const Api = (language = false, noTokenRequired = false) => {
  const apiCreate = axios.create({
    baseURL: BASE_URL,
  });

  apiCreate.interceptors.request.use(config => {
    return config;
  });

  apiCreate.interceptors.response.use(
    response => {
      store.dispatch(showLoading(false));
      return response;
    },
    error => {
      let message = '';
      // console.log(error.response);

      if (error.response) {
        message = error.response;
        if (error.response.status == 400) {
          message = error.response;
        }
        if (error.response.status == 422) {
          message = error.response.data.message;
        }
        if (error.response.status == 404) {
          message = 'NotFound';
        }
      }
      store.dispatch(showLoading(false));
      return message;
    },
  );
  return apiCreate;
};
