import React, { useState } from "react";
import Songs from "./components/Songs";
import Lyrics from "./components/Lyrics";
import { fetchArtists } from "./api";
import { useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import "./App.css";

const App = () => {
  const [artist, setArtist] = useState(null);
  const [page, setPage] = useState("artists");

  const handleOnArtistClick = (e) => {
    setArtist(e.target.innerHTML);
    setPage("songs");
  };

  const handleGoBack = () => {
    setPage("artists");
  };

  // const handleSongClick = (e) => {
  //   this.setState({ song: e.target.innerHTML, activeOnScreen: "lyrics" });
  //   setPage("")
  // };

  // handleButtonClick = () => {
  //   this.setState({ activeOnScreen: "" });
  // };

  // makeSwitch = () => {
  //   switch (this.state.activeOnScreen) {
  //     case "songs":
  //       return (
  //         <Songs artist={this.state.artist} onClick={this.handleSongClick} />
  //       );
  //     case "lyrics":
  //       return <Lyrics artist={this.state.artist} song={this.state.song} />;
  const { data, status } = useQuery("artists", fetchArtists);
  const artists = data && data.data.artists.artist;

  return (
    <>
      <div className="App">
        {page === "artists" ? (
          <div className="ui container">
            <div className="ui middle aligned">
              {artists && (
                <div className="ui middle aligned selection list">
                  {artists.map((artist) => {
                    return (
                      <div className="item" key={artist.playcount}>
                        <div className="content">
                          <div className="header" onClick={handleOnArtistClick}>
                            {artist.name}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        ) : (
          <Songs artist={artist} goBack={handleGoBack} />
        )}
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
};

export default App;
