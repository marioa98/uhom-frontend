import React from "react";
import Hero from "../components/header/Hero";
import Banner from "../components/header/Banner";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <Hero>
      <Banner title="404" subtitle="No se encontro la pagina">
        <Link to="/" className="btn-primary">
          Regresar al inicio
        </Link>
      </Banner>
    </Hero>
  );
};

export default Error;
