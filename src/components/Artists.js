import React from "react";
import { fetchArtists } from "../api";
import { useQuery } from "react-query";

const Artists = ({ setPage }) => {
  const { data, status } = useQuery("artists", fetchArtists);
  const artists = data && data.data.artists.artist;
  onArtistClick = () => {};
  return (
    <div className="ui container">
      <div className="ui middle aligned">
        {artists && (
          <div className="ui middle aligned selection list">
            {artists.map((artist) => {
              return (
                <div className="item" key={artist.playcount}>
                  <div className="content">
                    <div className="header" onClick={onArtistClick}>
                      {artist.name}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Artists;
