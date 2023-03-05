import React from "react";
import { Link } from "react-router-dom";
import AllBeers from "../assets/beers.png";
import RandomBeers from "../assets/random-beer.png";
import NewBeer from "../assets/new-beer.png";
import "./Home.css";

const Home = () => {
  return (
    <div id="home">
      <Link to="/beers" style={{ textDecoration: "none", color: "black" }}>
        <section className="allBeers">
          <img src={AllBeers} alt="all-beers" />
          <div className="text-container">
            <h1>All Beers</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              modi obcaecati corrupti rerum placeat vel eum voluptate quod nisi
              quisquam hic suscipit? Velit laudantium expedita officiis tempora
              aliquam perferendis facilis!
            </p>
          </div>
        </section>
      </Link>

      <Link
        to="/random-beer"
        style={{ textDecoration: "none", color: "black" }}
      >
        <section className="randomBeers">
          <img src={RandomBeers} alt="random-beers" />
          <div className="text-container">
            <h1>Random Beer</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              modi obcaecati corrupti rerum placeat vel eum voluptate quod nisi
              quisquam hic suscipit? Velit laudantium expedita officiis tempora
              aliquam perferendis facilis!
            </p>
          </div>
        </section>
      </Link>

      <Link to="/new-beer" style={{ textDecoration: "none", color: "black" }}>
        <section className="newBeer">
          <img src={NewBeer} alt="new-beer" />
          <div className="text-container">
            <h1>New Beer</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              modi obcaecati corrupti rerum placeat vel eum voluptate quod nisi
              quisquam hic suscipit? Velit laudantium expedita officiis tempora
              aliquam perferendis facilis!
            </p>
          </div>
        </section>
      </Link>
    </div>
  );
};

export default Home;
