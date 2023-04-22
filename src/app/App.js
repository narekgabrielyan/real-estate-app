import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, getUsers } from '../slices/commonSlice';
import { mockApi } from '../mockApi/mockApi';
import { getItemFromLocalStorage } from '../utils/helpers';

const App = () => {
  const { users, products } = useSelector(({ common }) => ({
    users: common.users,
    products: common.products
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (!getItemFromLocalStorage('users')) {
      mockApi.setUsersFakeData();
    }
  }, []);

  useEffect(() => {
    if (!getItemFromLocalStorage('products')) {
      mockApi.setProductsFakeData();
    }
  }, []);

  useEffect(() => {
    if (!users?.data.length) {
      dispatch(getUsers());
    }
  }, [dispatch, users?.data.length]);

  useEffect(() => {
    if (!products?.data.length) {
      dispatch(getProducts());
    }
  }, [dispatch, products?.data.length]);

  return <div>App component</div>;
};

export default App;
