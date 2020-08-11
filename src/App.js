import React from "react";
import "./App.css";
import { fetchArtists, fetchTopTracks } from "./api";
import LyricsSearch from "./components/LyricsSearch";
import SongsList from "./components/SongsList";

class App extends React.Component {
  state = {
    artist: "",
    header: "Top Artists",
    topArtists: [],
    topTracks: [],
  };

  async componentDidMount() {
    const artists = await fetchArtists();
    this.setState({ topArtists: artists.data.artists.artist });
  }

  handleArtistClick = async (e) => {
    this.setState({ artist: e.target.innerHTML });
    // fetch track names of the artist
    let artistTracks = await fetchTopTracks(
      e.target.innerHTML.replace(/\s/g, "").toLowerCase()
    );
    let tracks = artistTracks.data.toptracks.track.map((track) => track.name);
    this.setState({
      topTracks: tracks,
      header: `${this.state.artist}'s songs`,
    });

    // expand artist name to show the user their tracks
    let element = document.getElementById("toggle");

    if (element.style.display == "block" || element.style.display == "") {
      element.style.display = "none";
    } else {
      element.style.display = "block";
    }
  };

  render() {
    return (
      <div className="App">
        <h1 onClick={this.onHeaderClick}>{this.state.header}</h1>
        <div className="ui container">
          <div id="toggle" className="ui middle aligned selection list">
            {this.state.topArtists.length &&
              this.state.topArtists.map((artist) => {
                return (
                  <div className="item" key={artist.playcount}>
                    <div className="content">
                      <div className="header" onClick={this.handleArtistClick}>
                        {artist.name}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <SongsList artist={this.state.artist} tracks={this.state.topTracks} />
        </div>
      </div>
    );
  }
}

export default App;
