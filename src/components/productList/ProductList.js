import React from 'react';
import PropertyCard from '../propertyCard/PropertyCard';
import Message from '../message/Message';
import './productList.scss';

const ProductList = ({ products }) => {
  return products?.length > 0 ? (
    <div className="property_list">
      {products.map((productData) => (
        <PropertyCard data={productData} key={productData.id} type="compact" isCompactType />
      ))}
    </div>
  ) : (
    <Message type="info" message="No product was found" />
  );
};

export default ProductList;
