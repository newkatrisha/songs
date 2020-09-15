import React from "react";
import Artists from "./components/Artists";
import Songs from "./components/Songs";
import Lyrics from "./components/Lyrics";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { ReactQueryDevtools } from "react-query-devtools";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Artists} />
        <Route exact path="/:artist" component={Songs} />
        <Route path="/:artist/:song" component={Lyrics} />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </BrowserRouter>
  );
};

export default App;
