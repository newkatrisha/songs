import React, { useState, useEffect } from "react";
import { fetchLyrics } from "../api";

const Lyrics = (props) => {
  const [songText, setsongText] = useState("");
  useEffect(() => {
    const lyrics = async () => {
      const songText = await fetchLyrics(props.artist, props.song);
      setsongText(songText.data.lyrics);
    };
    lyrics();
  }, []);
  return (
    <div>
      <pre>{songText}</pre>
    </div>
  );
};

export default Lyrics;
