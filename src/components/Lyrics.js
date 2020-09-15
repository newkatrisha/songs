import React from "react";
import { fetchLyrics } from "../api";
import { useQuery } from "react-query";

const Lyrics = (props) => {
  console.log(props);
  const name = props.match.params.artist;
  const song = props.match.params.song;

  const { data, status } = useQuery([name, song], fetchLyrics);
  const songText = data && data.data.lyrics;

  return (
    <div>
      <pre>{songText}</pre>
    </div>
  );
};

export default Lyrics;
