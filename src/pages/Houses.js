import React from "react";
import Hero from "../components/header/Hero";
import Banner from "../components/header/Banner";
import { Link } from "react-router-dom";
import HousesContainer from "../components/HousesContainer";
const Houses = () => {
  return (
    <>
      <Hero hero="housesHero">
        <Banner title="Nuestras casas">
          <Link to="/" className="btn-primary">
            Regresar al inicio
          </Link>
        </Banner>
      </Hero>
      <HousesContainer />
    </>
  );
};

export default Houses;
