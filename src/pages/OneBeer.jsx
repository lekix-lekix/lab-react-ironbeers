import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BeerDetails from "../components/BeerDetails";
import "./OneBeer.css";

const OneBeer = () => {
  const [oneBeer, setOneBeer] = useState([]);
  const beerId = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId.id}`)
      .then((response) => setOneBeer(response.data));
  }, [beerId]);

  if (!oneBeer)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );

  return (
    <>
      <BeerDetails beer={oneBeer} />
    </>
  );
};

export default OneBeer;
