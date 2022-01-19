import logo from "./logo.svg";
import "./App.css";
import Banner from "./components/Banner";
import RowPlayers from "./components/RowPlayers";
import { Stack } from "react-bootstrap";
import About from "./components/About"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner />

        <RowPlayers />

        <About/>
      </header>
    </div>
  );
}

export default App;
