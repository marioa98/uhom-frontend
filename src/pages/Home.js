import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/header/Hero";
import Banner from "../components/header/Banner";
import Services from "../components/Services";
import FeaturedHouses from "../components/FeaturedHouses";
const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Inmobiliaria Colima"
          subtitle="Reserva tu visita gratuitamente"
        >
          <Link to="/houses" className="btn-primary">
            Nuestras casas
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedHouses />
    </>
  );
};

export default home;
