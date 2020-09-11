import React, { useState, useEffect } from "react";
import { fetchTopTracks } from "../api";

const Songs = (props) => {
  console.log(props);
  const artist = props.artist.replace(/\s/g, "").toLowerCase();
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchTracks = async () => {
      const fetchedTracks = await fetchTopTracks(artist);
      setTracks(fetchedTracks.data.toptracks.track);
    };
    fetchTracks();
  }, []);
  console.log(tracks);
  return (
    <div className="ui list">
      {tracks &&
        tracks.map((track) => {
          return (
            <div className="item" onClick={props.onClick}>
              <a className="header">{track.name}</a>
            </div>
          );
        })}
    </div>
  );
};
export default Songs;
