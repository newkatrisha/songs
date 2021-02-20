import React from "react";
import Artists from "./components/Artists";
import Songs from "./components/Songs";
import Lyrics from "./components/Lyrics";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Artists} />
        <Route exact path="/:artist" component={Songs} />
        <Route path="/:artist/:song" component={Lyrics} />
      </div>
    </BrowserRouter>
  );
};

export default App;
