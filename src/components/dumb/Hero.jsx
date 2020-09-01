import React from "react";
import '../../assets/styles/General/hero/hero.css'

const Hero = ({ children, hero }) => <header className={hero}>{children}</header>

export default Hero;

Hero.defaultProps = {
  hero: "defaultHero"
};
