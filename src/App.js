import React from "react";
import "./App.css";
import { fetchLyrics, fetchArtists, fetchTopTracks } from "./api";

class App extends React.Component {
  state = {
    artist: "",
    songName: "",
    lyrics: "",
    topArtists: [],
    topTracks: [],
  };

  async componentDidMount() {
    const artists = await fetchArtists();
    console.log(artists);
    this.setState({ topArtists: artists.data.artists.artist });
  }

  handleSubmit = async (artist, song) => {
    const songLyrics = await fetchLyrics(
      this.state.artist,
      this.state.songName
    );
    this.setState({ lyrics: songLyrics.data.lyrics });
  };

  handleArtistClick = async (artist) => {
    let artistTracks = await fetchTopTracks(artist);
    let tracks = artistTracks.data.toptracks.track.map((track) => track.name);
    this.setState({ topTracks: tracks });
  };

  render() {
    console.log(this.state.topTracks);
    return (
      <div className="App">
        <h1>Top Artists</h1>
        <div className="ui container">
          <div className="ui accordion">
            {this.state.topArtists.length &&
              this.state.topArtists.map((artist) => {
                return (
                  <div
                    className="title"
                    key={artist.playcount}
                    onClick={(e) =>
                      this.handleArtistClick(
                        e.target.innerHTML.replace(/\s/g, "").toLowerCase()
                      )
                    }
                  >
                    {artist.name}
                  </div>
                );
              })}
          </div>
        </div>
        <h1>Get the lyrics of your favorite songs!</h1>
        <input
          type="text"
          placeholder="artist"
          onChange={(e) => this.setState({ artist: e.target.value })}
        />
        <input
          type="text"
          placeholder="song"
          onChange={(e) => this.setState({ songName: e.target.value })}
        />
        <button onClick={this.handleSubmit}>Submit</button>
        <div className="container">
          <p>{this.state.lyrics}</p>
        </div>
      </div>
    );
  }
}

export default App;
