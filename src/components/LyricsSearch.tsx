import React, { useState } from "react";
import { fetchLyrics } from "../api";

const LyricsSearch = () => {
  const [ track, setTrack] = useState({
    artist: "",
    songName: "",
    lyrics: "",
  })
 

  const handleSubmit = async () => {
    const lyrics = await fetchLyrics(track.artist, track.songName);
    console.log(lyrics);
    //@ts-ignore
    setTrack({ lyrics: lyrics.data.lyrics });
  };

  
    return (
      <div>
        <h1>Get the lyrics of your favorite songs!</h1>
        <input
          type="text"
          placeholder="artist"
          // onChange={(e) => setTrack((e) => { ...track, track.artist: e.target.value })}
        />
        <input
          type="text"
          placeholder="song"
          // onChange={(e) => setTrack({ songName: e.target.value })}
        />
        <button onClick={() => handleSubmit}>Submit</button>
        <div className="container">
          <p>{track.lyrics}</p>
        </div>
      </div>
    );

}

export default LyricsSearch;
