import React from "react";
import Hero from "../dumb/Hero";
import Banner from "../dumb/Banner";
import { Link } from "react-router-dom";

export default function Error({
  status="404", 
  message="Parece que la página solicitada no existe.", 
  redirectionPath="/",
  redirectionMessage="Regresar al inicio"
}){

  return (
    <Hero hero="housesHero">
      <Banner title={status} subtitle={message} dark>
        <Link to={redirectionPath} className="btn-primary">
          {redirectionMessage}
        </Link>
      </Banner>
    </Hero>
  );
}