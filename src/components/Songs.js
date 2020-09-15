import React from "react";
import { fetchTopTracks } from "../api";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const Songs = (props) => {
  const artist = props.match.params.artist;
  const newArtist = artist.replace(/\s/g, "").toLowerCase();

  const { data, status } = useQuery([newArtist], fetchTopTracks);
  const tracks = data && data.data.toptracks.track;

  return (
    <div>
      <Link to="/">
        <button id="artists">All artists</button>
      </Link>
      {tracks && (
        <div className="songs">
          <h1 id="artistName">{artist}</h1>
          {tracks.map((track, i) => {
            return (
              <Link to={"/" + artist + "/" + track.name}>
                <p key={i}>{track.name}</p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Songs;
