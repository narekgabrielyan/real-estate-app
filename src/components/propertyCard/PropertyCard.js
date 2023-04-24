import React from 'react';
import { useNavigate } from 'react-router-dom';
import ImageSwiper from './ImageSwiper';
import UserInfo from '../userInfo/UserInfo';
import cn from 'classnames';
import './propertyCard.scss';

const PropertyCard = ({ data, isCollapsed = false }) => {
  const { id, images, name, briefDescription, detailedDescription, location, price, agentId } =
    data;
  const navigate = useNavigate();
  const imageSource = require(`../../assets/img/properties/${images[0]}`);

  const onShowMore = () => {
    navigate(`/propertyDetails/${id}`);
  };

  const cardCn = cn({
    property_card: true,
    'property_card-compact': !isCollapsed,
    'property_card-collapsed': isCollapsed
  });

  return (
    <div className={cardCn} onClick={!isCollapsed ? onShowMore : null}>
      {isCollapsed && (
        <div className="property_header">
          <span className="property_back_btn">
            <i className="bi-arrow-left-short" onClick={() => navigate(-1)} />
          </span>
          <span className="property_header_txt">{name}</span>
        </div>
      )}
      {isCollapsed ? (
        <ImageSwiper id={id} images={images} />
      ) : (
        <div className="property_img">
          <img src={imageSource} alt="" />
        </div>
      )}
      <div className="property_info">
        {!isCollapsed && <span className="property_name">{name}</span>}
        <span className="property_location">{location}</span>
        <span className="property_price">{price}</span>
      </div>
      {isCollapsed && (
        <div className="agent_info">
          <span className="agent_info_label">Contact agent for more info</span>
          <UserInfo userId={agentId} />
        </div>
      )}
      <span className="property_description">
        {!isCollapsed ? briefDescription : detailedDescription}
      </span>
    </div>
  );
};

export default PropertyCard;
