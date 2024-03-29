import React from "react";
import { Link } from "react-router-dom";
import Hero from "../dumb/Hero";
import Banner from "../dumb/Banner";
import { useSessionInfo } from "../../services/sessionInfo";
import { useUserContext } from "../../UserContext";


const Home = () => {
  const { isLogged } = useUserContext();

  const session = useSessionInfo();

  const subtitle = () => isLogged 
    ? `Bienvenido ${ session.names }.`
    : "Registrate y visita la casa de tus sueños."
  

  return (
    <>
      <Hero>
        <Banner
          title="GoHOME's"
          subtitle={subtitle()}
          dark
        >
          <Link to="/properties" className="btn-primary">
            <strong>Nuestras casas</strong>
          </Link>
        </Banner>
      </Hero>
  
    </>
  );
};

export default Home;
