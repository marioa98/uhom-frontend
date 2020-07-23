import React from "react";
import { Link } from "react-router-dom";
import Hero from "../dumb/Hero";
import Banner from "../dumb/Banner";
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="GoHOME's"
          subtitle="Reserva tu visita gratuitamente"
        >
          <Link to="/houses" className="btn-primary">
            <strong>Nuestras casas</strong>
          </Link>
        </Banner>
      </Hero>
      <Footer/>
    </>
  );
};

export default Home;
