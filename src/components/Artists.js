import React from "react";
import { fetchArtists } from "../api";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const Artists = (props) => {
  console.log(props);
  const { data, status } = useQuery("artists", fetchArtists);
  const artists = data && data.data.artists.artist;

  return (
    <div className="ui container">
      <div className="ui middle aligned">
        {artists && (
          <div className="ui middle aligned selection list">
            {artists.map((artist) => {
              return (
                <div className="item" key={artist.playcount}>
                  <div className="content">
                    <Link to={"/" + artist.name}>
                      <div className="header">{artist.name}</div>
                    </Link>
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
