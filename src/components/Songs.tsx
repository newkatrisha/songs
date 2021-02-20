import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import { TrackType } from "../store/actionTypes";
import { myKey } from "../store/actions";
import Spinner from "react-bootstrap/Spinner";

interface TParams {
  artist: string;
}

const Songs = ({ match }: RouteComponentProps<TParams>) => {
  const artist = match.params.artist;
  const newArtist = artist.replace(/\s/g, "").toLowerCase();
  const [tracks, setTracks] = useState<string[]>([]);

  useEffect(() => {
    const getTracks = async () => {
      const res = await axios.get(
        `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${newArtist}&api_key=${myKey}&format=json`
      );
      setTracks(res.data.toptracks.track.map((item: TrackType) => item.name));
    };
    getTracks();
  }, []);

  return (
    <div>
      <Link to="/">
        <button id="artists">All artists</button>
      </Link>
      <div className="songs">
        <h1 id="artistName">{artist}</h1>
        {tracks.length ? (
          tracks.map((track, i) => {
            return (
              <Link to={"/" + artist + "/" + track} key={i}>
                <p>{track}</p>
              </Link>
            );
          })
        ) : (
          <Spinner animation="grow" variant="info">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
      </div>
    </div>
  );
};
export default Songs;
