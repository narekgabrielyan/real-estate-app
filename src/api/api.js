import {
  asyncCallImitator,
  getItemFromLocalStorage,
  removeItemFromLocalStorage,
  setItemInLocalStorage
} from '../utils/helpers';

export const api = {
  getUsers: async () => {
    return await asyncCallImitator(() => getItemFromLocalStorage('users'));
  },
  getProduct: async (productId) => {
    return await asyncCallImitator(() => {
      return getItemFromLocalStorage('products').data.find((product) => product.id === productId);
    });
  },
  getProducts: async () => {
    return await asyncCallImitator(() => getItemFromLocalStorage('products'));
  },
  logInUser: async (userId) => {
    return await asyncCallImitator(() => setItemInLocalStorage('userId', userId));
  },
  logOutUser: async () => {
    return await asyncCallImitator(() => removeItemFromLocalStorage('userId'));
  }
};
