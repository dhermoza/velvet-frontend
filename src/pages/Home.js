import Banner from "../components/Banner";
import RowPlayers from "../components/RowPlayers";

import About from "../components/About"
import React from "react";

const Home = () => (

    <div>
      <header className="App-header">
        <Banner />
        <RowPlayers />
        <About />
      </header>
    </div>
);

export default Home;
