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
  },
  addUser: async (user) => {
    const existingUsers = getItemFromLocalStorage('users');
    existingUsers.data.push(user);
    return await asyncCallImitator(() => {
      setItemInLocalStorage('users', existingUsers);
    });
  },
  addProduct: async (product) => {
    const existingProducts = getItemFromLocalStorage('products');
    existingProducts.data.push(product);
    return await asyncCallImitator(() => {
      setItemInLocalStorage('products', existingProducts);
    });
  }
};
