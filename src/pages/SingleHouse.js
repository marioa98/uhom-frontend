import React, { Component } from "react";
import defaultBcg from "../images/house-1.jpeg";
/* import Hero from "../components/Hero"; */
import Banner from "../components/header/Banner";
import { Link } from "react-router-dom";
import { HouseContext } from "../context";

import StyledHero from "../components/header/StyledHero";
export default class SingleHouse extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
    };
  }
  static contextType = HouseContext;

  // componentDidMount() {
  //   console.log(this.props);
  // }
  render() {
    const { getHouse } = this.context;
    const house = getHouse(this.state.slug);

    if (!house) {
      return (
        <div className="error">
          <h3> La casa no fue encontrada...</h3>
          <Link to="/houses" className="btn-primary">
            Regresar a casas
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = house;
    const [main, ...defaultImages] = images;
    console.log(defaultImages);

    return (
      <>
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${name} house`}>
            <Link to="/houses" className="btn-primary">
              Regresar a casas
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-house">
          <div className="single-house-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-house-info">
            <article className="desc">
              <h3>Detalles</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Informacion</h3>
              <h6>Precio : ${price}</h6>
              <h6>Tamaño : {size} </h6>
              <h6>
                Capacidad :
                {capacity > 1 ? `${capacity} persona` : `${capacity} personas`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="house-extras">
          <h6>extras </h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}
