import React from "react";

const BeerDetails = ({ beer }) => {
  const {
    name,
    image_url,
    attenuation_level,
    tagline,
    first_brewed,
    description,
    contributed_by,
  } = beer;

  return (
    <div className="beerDetails">
      <img src={image_url} alt={`${name}-pic`} />
      <div className="beerNameAtt">
        <h2>{name}</h2>
        <aside className="att">{attenuation_level}</aside>
      </div>
      <div className="beerTagBrewed">
        <h4>{tagline}</h4>
        <aside>{first_brewed}</aside>
      </div>
      <p>{description}</p>
      <span>{contributed_by}</span>
    </div>
  );
};

export default BeerDetails;
