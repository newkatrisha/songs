import React from "react";
import { fetchTopTracks, fetchLyrics } from "../api";
import { useQuery } from "react-query";

const Songs = ({ artist, goBack }) => {
  const newArtist = artist.replace(/\s/g, "").toLowerCase();

  const { data, status } = useQuery([newArtist], fetchTopTracks);
  const tracks = data && data.data.toptracks.track;

  const onSongClick = (e) => {
    const songName = e.target.innerHTML;
    const lyrics = async () => {
      const song = await fetchLyrics(artist, songName);
      console.log(song.data.lyrics);
    };
    lyrics();
  };

  return (
    <div>
      <button id="artists" onClick={goBack}>
        All artists
      </button>
      {tracks && (
        <div className="songs">
          <h1 id="artistName">{artist}</h1>
          {tracks.map((track, i) => {
            return (
              <p key={i} onClick={onSongClick}>
                {track.name}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Songs;
