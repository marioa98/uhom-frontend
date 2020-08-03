import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Hero from "../dumb/Hero";
import Banner from "../dumb/Banner";
import { UserContext } from "../../App"


const Home = () => {
  const {user} = useContext(UserContext);

  const subtitle = () => user.isLogged 
    ? `Bienvenido ${JSON.parse(user.user).names}.`
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
