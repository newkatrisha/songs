import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchArtists } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../index";

const Artists: React.FC = () => {
  const dispatch = useDispatch();
  const artists = useSelector((state: RootStore) => state.artists);
  useEffect(() => {
    dispatch(fetchArtists());
  }, []);

  return (
    <div className="ui container">
      <div className="ui middle aligned">
        <div className="ui middle aligned selection list">
          {artists &&
            artists.map((artist: string) => {
              return (
                <div className="item" key={artist}>
                  <div className="content">
                    <Link to={"/" + artist}>
                      <div className="header">{artist}</div>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Artists;
