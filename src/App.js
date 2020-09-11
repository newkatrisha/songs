import React, { Component } from "react";
import { fetchArtists } from "./api";
import Songs from "./components/Songs";
import Lyrics from "./components/Lyrics";

class App extends Component {
  state = {
    artists: [],
    artist: "",
    song: "",
    activeOnScreen: "",
  };

  async componentDidMount() {
    const artists = await fetchArtists();
    this.setState({ artists: artists.data.artists.artist });
  }

  handleOnArtistClick = (e) => {
    this.setState({ artist: e.target.innerHTML, activeOnScreen: "songs" });
  };

  handleSongClick = (e) => {
    console.log(e.target.innerHTML);
    this.setState({ song: e.target.innerHTML, activeOnScreen: "lyrics" });
  };

  handleButtonClick = () => {
    this.setState({ activeOnScreen: "" });
  };

  makeSwitch = () => {
    switch (this.state.activeOnScreen) {
      case "songs":
        return (
          <Songs artist={this.state.artist} onClick={this.handleSongClick} />
        );
      case "lyrics":
        return <Lyrics artist={this.state.artist} song={this.state.song} />;
      default:
        return (
          <div className="ui middle aligned selection list">
            {this.state.artists.length &&
              this.state.artists.map((artist) => {
                return (
                  <div className="item" key={artist.playcount}>
                    <div className="content">
                      <div
                        className="header"
                        onClick={this.handleOnArtistClick}
                      >
                        {artist.name}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        );
    }
  };

  render() {
    return (
      <div className="ui container">
        <div className="ui middle aligned">
          {this.makeSwitch()}
          {this.state.activeOnScreen === "lyrics" ? (
            <button onClick={this.handleButtonClick}>Go back</button>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
