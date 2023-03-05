import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./AllBeers.css";

const AllBeers = () => {
  const [beers, setBeers] = useState(null);
  const [searchedBeer, setSearchedBeer] = useState("");

  useEffect(() => {
    try {
      axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
        .then((response) => setBeers(response.data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (searchedBeer.length > 0) {
      try {
        axios
          .get(
            `https://ih-beers-api2.herokuapp.com/beers/search?q=${searchedBeer}`
          )
          .then((response) => setBeers(response.data));
      } catch (error) {
        console.log(error);
      }
    }
  }, [searchedBeer]);

  if (!beers)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );

  return (
    <>
      <input
        type="text"
        value={searchedBeer}
        onChange={(event) => setSearchedBeer(event.target.value)}
      />
      {beers.map((beer) => {
        return (
          <div key={beer._id}>
            <Link to={`/beers/${beer._id}`}>
              <div className="beer">
                <div className="oneBeerImage">
                  <img
                    className="oneBeer"
                    src={beer.image_url}
                    alt={beer.name}
                  ></img>
                </div>
                <div className="oneBeerText">
                  <h1>{beer.name}</h1>
                  <h3>{beer.tagline}</h3>
                  <h4>Created by: {beer.contributed_by}</h4>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default AllBeers;
