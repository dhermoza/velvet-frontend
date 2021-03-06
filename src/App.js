import logo from "./logo.svg";
import "./App.css";
import { Stack } from "react-bootstrap";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Add from "./pages/Add";
import Error from "./pages/Error";
import Show from "./pages/Show";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListPlayers from "./pages/ListPlayers";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/add" element={<Add />} />
          <Route exact path="players/:id" element={<Show />} />
          <Route exact path="/players" element={<ListPlayers />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
