import axios from "axios";
import React, { useEffect, useState } from "react";
import BeerDetails from "../components/BeerDetails";
import "./OneBeer.css";
const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("https://ih-beers-api2.herokuapp.com/beers/random")
        .then((response) => setRandomBeer(response.data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <BeerDetails beer={randomBeer} />;
};

export default RandomBeer;
