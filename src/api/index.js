import axios from "axios";

// api key = ca438dcdcda3164679f0e7942f0984cf;

const url = "https://api.lyrics.ovh/v1";

export const fetchLyrics = async (artist, song) => {
  let changeableUrl = url;
  if ((artist, song)) {
    changeableUrl = `${url}/${artist}/${song}`;
  }
  try {
    const lyrics = await axios.get(changeableUrl);
    return lyrics;
  } catch (error) {
    console.log(error);
  }
};

export const fetchArtists = async () => {
  const myKey = "ca438dcdcda3164679f0e7942f0984cf";
  try {
    const data = await axios.get(
      "http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=ca438dcdcda3164679f0e7942f0984cf&format=json"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchTopTracks = async (artist) => {
  try {
    const data = await axios.get(
      `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artist}&api_key=ca438dcdcda3164679f0e7942f0984cf&format=json`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
