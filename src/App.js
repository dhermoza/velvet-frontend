import logo from "./logo.svg";
import "./App.css";
import Banner from "./components/Banner";
import RowPlayers from "./components/RowPlayers";
import { Stack } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner />

        <RowPlayers />

      </header>
    </div>
  );
}

export default App;
