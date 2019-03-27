import React from "react";
import "./patate.css";

const Quote = ({ quote, character, image }) => (
  <figure className= "personnage">
    <img src={image} alt={character} />
    <figcaption>
      <blockquote className="texte">{quote}</blockquote>
      <cite className="blaze">{character}</cite>
    </figcaption>
  </figure>
);

export default Quote;