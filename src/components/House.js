import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/house-1.jpeg";
import PropTypes from "prop-types";
import { memo } from "react";
const House = memo(({ house }) => {
  const { name, slug, images, price } = house;
  // console.log(name);
  return (
    <article className="house">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single house" />
        <div className="price-top">
          <h6>${price}</h6>
        </div>
        <Link to={`/houses/${slug}`} className="btn-primary house-link">
          features
        </Link>
      </div>
      <p className="house-info">{name}</p>
    </article>
  );
});

House.propTypes = {
  house: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
export default House;
