import React from "react";
import '../../assets/styles/General/hero/banner.css'
const Banner = ({ children, title, subtitle }) => {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div />
      <p>{subtitle}</p>
      {children}
    </div>
  );
};

export default Banner;
