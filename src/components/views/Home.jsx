import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Hero from "../dumb/Hero";
import Banner from "../dumb/Banner";
import { UserContext } from "../../App"
import {getNames} from "../../services/userInfo";


const Home = () => {
  const {user} = useContext(UserContext);

  const subtitle = () => user.isLogged 
    ? `Bienvenido ${getNames()}.`
    : "Reserva tu visita gratuitamente."
  

  return (
    <>
      <Hero>
        <Banner
          title="GoHOME's"
          subtitle={subtitle()}
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
