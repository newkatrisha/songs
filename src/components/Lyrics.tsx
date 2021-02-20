import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
interface TParams {
  artist: string;
  song: string;
}

const Lyrics = ({ match }: RouteComponentProps<TParams>) => {
  const artist = match.params.artist;
  const song = match.params.song;
  const [lyrics, setLyrics] = useState<string[]>([]);

  useEffect(() => {
    const getLyrics = async () => {
      const res = await axios.get(
        `https://api.lyrics.ovh/v1/${artist}/${song}`
      );
      console.log(res);
      setLyrics(res.data.lyrics);
    };
    getLyrics();
  }, [artist, song]);

  //@ts-ignore
  // const fetchLyrics = async (artist, song) => {
  //   let changeableUrl = url;
  //   //@ts-ignore
  //   if ((artist, song)) {
  //     changeableUrl = `${url}/${artist}/${song}`;
  //   }
  //   try {
  //     const lyrics = await axios.get(changeableUrl);
  //     return lyrics;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const memoLyrics = useMemo(() => fetchLyrics(name, song), [name, song]);

  // const { data, status } = useQuery([name, song], memoLyrics);
  // const songText = data && data.data.lyrics;
  // console.log(data);

  return (
    <div>
      {/* <pre>{lyrics}</pre> */}
      <h1>Hi</h1>
    </div>
  );
};

export default Lyrics;
