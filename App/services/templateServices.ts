import {Api} from './api';

export const getExampleApi = () => {
  return Api().get(`/todos/1`);
};
