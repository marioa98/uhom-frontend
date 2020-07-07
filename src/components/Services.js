import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./header/Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Elegantes espacios",
        info:
          "Acompaña tus veladas en incribles lugares cercanos"
      },
      {
        icon: <FaHiking />,
        title: "Espacios libres",
        info:
          "Disfruta de la naturaleza cercana y buenas caminatas"
      },
      {
        icon: <FaShuttleVan />,
        title: "Transporte cercano",
        info:
          "Despreocupate del transporte publico, nuestras casas estan colocadas en puntos estrategicos"
      },
      {
        icon: <FaBeer />,
        title: "Areas de convivio",
        info:
          "Encontraras cercano a tu casa distintos lugares para convivir sanamente en compañia de amigos"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="Servicios" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
