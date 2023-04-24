import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../slices/productSlice';
import PropertyCard from './components/PropertyCard';
import './properties.scss';

const Properties = () => {
  const { products } = useSelector(({ product }) => ({
    products: product.products
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    if (!products?.data.length) {
      dispatch(getProducts());
    }
  }, [dispatch, products?.data.length]);

  const productsList = products.data;

  return (
    <div className="properties_page page">
      {productsList?.map((productData) => (
        <PropertyCard data={productData} key={productData.id} type="compact" isCompactType />
      ))}
    </div>
  );
};

export default Properties;
