import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPopup} from "../../slices/commonSlice";
import { USER_TYPE_ID_MAP } from '../../utils/constants';
import {addProperty} from "../../utils/popupTypes";
import Message from '../../components/message/Message';
import ProductList from '../../components/productList/ProductList';
import Button from "../../shared/button/Button";
import './myProperties.scss';

const MyProperties = () => {
  const { currentUser, products } = useSelector(({ user, product }) => ({
    currentUser: user.currentUser,
    users: user.users,
    products: product.products,
  }));
  const dispatch = useDispatch();

  const onOpenAddProperties = () => {
    dispatch(setPopup(addProperty))
  }

  const getUserProperties = () => {
    if (!products.data.length) return;
    const properties = products.data;

    return properties.filter((property) => property.agentId === currentUser.id
    );
  };

  if (!currentUser) return null;

  const isAgent = currentUser.userTypeId === USER_TYPE_ID_MAP.AGENT;

  return (
    <div className="my_properties_page page">
      {isAgent ? (
        <div className="my_properties_page_content">
          <div className="my_properties_page_header">
            <span>Property list</span>
            <Button styleType="secondary" onClick={onOpenAddProperties}><i className="bi-house-add"/> Add Property</Button>
          </div>
          <ProductList products={getUserProperties()} />
        </div>
      ) : (
        <Message type="info" message="Log in as agent to add properties" />
      )}
    </div>
  );
};

export default MyProperties;
