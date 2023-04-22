import { fakeProducts, fakeUsers } from '../fakeData';
import { setItemInLocalStorage } from '../utils/helpers';

export const mockApi = {
  setUsersFakeData: () => setItemInLocalStorage('users', fakeUsers),
  setProductsFakeData: () => setItemInLocalStorage('products', fakeProducts)
};
