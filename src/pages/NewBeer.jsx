import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewBeer = () => {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [brewer_tips, setBrewer_tips] = useState("");
  const [contributed_by, setContributed_by] = useState("");
  const [attenuation_level, setAttenuation_level] = useState(0);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const beerToCreate = {
      name,
      tagline,
      description,
      first_brewed,
      brewer_tips,
      attenuation_level,
      contributed_by,
    };

    try {
      await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        beerToCreate
      );
      navigate("/beers");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="tagline">Tagline: </label>
        <input
          type="text"
          value={tagline}
          onChange={(event) => setTagline(event.target.value)}
        />

        <label htmlFor="description">Description: </label>
        <input
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <label htmlFor="first_brewed">First Brewed: </label>
        <input
          type="text"
          value={first_brewed}
          onChange={(event) => setFirst_brewed(event.target.value)}
        />

        <label htmlFor="brewer_tips">Brewer Tips: </label>
        <input
          type="text"
          value={brewer_tips}
          onChange={(event) => setBrewer_tips(event.target.value)}
        />

        <label htmlFor="attenuation_level">Attenuation Level: </label>
        <input
          type="number"
          value={attenuation_level}
          onChange={(event) => setAttenuation_level(event.target.value)}
        />

        <label htmlFor="contributed_by">Contributed by: </label>
        <input
          type="text"
          value={contributed_by}
          onChange={(event) => setContributed_by(event.target.value)}
        />

        <button>Submit beer</button>
      </form>
    </div>
  );
};

export default NewBeer;
