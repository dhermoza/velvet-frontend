import logo from "./logo.svg";
import "./App.css";
import { Stack } from "react-bootstrap";

import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Add from "./pages/Add"
import Error from "./pages/Error"
import Show from "./pages/Show"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      {/* <Routes>
      
          <Route
          exact
            path='/'
          >
            <Home/>
          </Route>
          
          <Route
          exact
            path='/about'
          >
            <AboutUs/>
          </Route>
          <Route
          exact
            path='/show'
          >
            <AboutUs/>
          </Route>
      </Routes> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="add" element={<Add />} />
          <Route exact
              path='players/:id' element={<Show />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}



export default App;
