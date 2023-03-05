import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomeBar from "./components/HomeBar";
import Home from "./pages/Home";
import AllBeers from "./pages/AllBeers";
import OneBeer from "./pages/OneBeer";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<HomeBar />}>
          <Route path="/beers" element={<AllBeers />} />
          <Route path="/beers/:id" element={<OneBeer />} />
          <Route path="/random-beer" element={<RandomBeer />} />
          <Route path="/new-beer" element={<NewBeer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
