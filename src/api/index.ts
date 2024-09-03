
import { ApiTypes } from './types';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5000/api/';

function API({ method, route, payload, params }: ApiTypes): any {

  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: route,
      data: payload,
      params: params,
    })
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        if (error?.response?.status === 500) {
          reject(error?.response?.data?.message || 'Something went wrong');
        } else {
          reject(error?.response?.data?.message || 'Something went wrong');
        }
      });
  });
}

export default API;
export function fetcher({ method, payload, route }: ApiTypes): any {
  return new Promise((resolve, reject) => {
    fetch(
      `${process.env.REACT_APP_BASE_URL
      }/api/${route}`,
      {
        method: method,
        body: payload,
      },
    ).then(res => {
      if (res.status === 200) {
        resolve(res.json());
      } else if (res.status === 500) {
        reject(res.statusText || 'Something went wrong');
      } else {
        reject(res.statusText || 'Something went wrong');
      }
    });
  });
}
