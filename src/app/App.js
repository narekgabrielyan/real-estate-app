import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getProducts } from '../slices/commonSlice';
import {getUsers} from "../slices/userSlice";
import { mockApi } from '../mockApi/mockApi';
import { isDataInStorage } from '../utils/helpers';
import { ROUTES } from '../utils/constants';
import Home from '../pages/Home';
import MyProperties from '../pages/MyProperties';
import Properties from '../pages/Properties';
import Header from '../components/header/Header';
import Popup from '../shared/popup/Popup';

const App = () => {
  const { users, products } = useSelector(({ user, common }) => ({
    users: user.users,
    products: common.products
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isDataInStorage('users')) {
      mockApi.setUsersFakeData();
    }
    if (!isDataInStorage('products')) {
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

  return (
    <div className="app">
      <Popup />
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.PROPERTIES} element={<Properties />} />
        <Route path={ROUTES.MY_PROPERTIES} element={<MyProperties />} />
      </Routes>
    </div>
  );
};

export default App;
