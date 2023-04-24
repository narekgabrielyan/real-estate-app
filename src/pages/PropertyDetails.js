import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropertyCard from '../components/propertyCard/PropertyCard';
import { getProduct } from '../slices/productSlice';

const PropertyDetails = () => {
  const { currentProduct } = useSelector(({ product }) => ({
    currentProduct: product.currentProduct
  }));
  const { propertyId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct({ productId: +propertyId }));
  }, [dispatch, propertyId]);

  if (!currentProduct) {
    return null;
  }

  return (
    <div className="property_details_page page">
      <PropertyCard data={currentProduct} isCollapsed />
    </div>
  );
};

export default PropertyDetails;
