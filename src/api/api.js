import { getItemFromLocalStorage } from '../utils/helpers';

export const api = {
  getUsers: async () => {
    return await new Promise((resolve, reject) => {
      try {
        const value = getItemFromLocalStorage('users');
        resolve(value);
      } catch (error) {
        reject(error);
      }
    });
  },
  getProducts: async () => {
    return await new Promise((resolve, reject) => {
      try {
        const value = getItemFromLocalStorage('products');
        resolve(value);
      } catch (error) {
        reject(error);
      }
    });
  }
};
