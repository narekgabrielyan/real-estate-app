import { asyncCallImitator, getItemFromLocalStorage } from '../utils/helpers';

export const api = {
  getUsers: async () => {
    return await asyncCallImitator(() => getItemFromLocalStorage('users'));
  },
  getProducts: async () => {
    return await asyncCallImitator(() => getItemFromLocalStorage('products'));
  }
};
