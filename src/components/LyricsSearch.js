import React, { Component } from "react";
import { fetchLyrics } from "../api";

export default class LyricsSearch extends Component {
  state = {
    artist: "",
    songName: "",
    lyrics: "",
  };

  handleSubmit = async () => {
    const lyrics = await fetchLyrics(this.state.artist, this.state.songName);
    console.log(lyrics);
    this.setState({ lyrics: lyrics.data.lyrics });
  };

  render() {
    return (
      <div>
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
