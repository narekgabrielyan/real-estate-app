import React from 'react';
import { useSelector } from 'react-redux';
import { USER_TYPE_ID_MAP } from '../../utils/constants';
import Message from '../../components/message/Message';
import ProductList from '../../components/productList/ProductList';
import './myProperties.scss';

const MyProperties = () => {
  const { currentUser, products } = useSelector(({ user, product }) => ({
    currentUser: user.currentUser,
    users: user.users,
    products: product.products
  }));

  const getUserProperties = () => {
    if (!products.data.length) return;
    const properties = products.data;
    const userPropertyIds = currentUser.productsInfo.ids;

    return properties.filter((property) => {
      return userPropertyIds.includes(property.id);
    });
  };

  if (!currentUser) return null;

  const isAgent = currentUser.userTypeId === USER_TYPE_ID_MAP.AGENT;

  return (
    <div className="my_properties_page page">
      {isAgent ? (
        <div className="my_properties_page_content">
          <ProductList products={getUserProperties()} />
        </div>
      ) : (
        <Message type="info" message="Log in as agent to add properties" />
      )}
    </div>
  );
};

export default MyProperties;
