import React, { useState } from "react";
import { fetchLyrics } from "../api";

export default function SongsList(props) {
  const [words, setWords] = useState(null);
  const [header, setHeader] = useState(null);
  const handleClick = async (e) => {
    let songName = e.target.innerHTML;
    let lyrics = await fetchLyrics(props.artist, e.target.innerHTML);
    console.log(lyrics);
    setWords(lyrics.data.lyrics);
    setHeader(songName);
  };
  if (words) {
    return (
      <div>
        <h1>{header}</h1>
        <pre>{words}</pre>
      </div>
    );
  }
  return (
    <div className="ui list">
      {props.tracks.map((track) => {
        return (
          <div className="item">
            <a className="header" onClick={handleClick}>
              {track}
            </a>
          </div>
        );
      })}
    </div>
  );
}
