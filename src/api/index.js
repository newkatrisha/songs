import axios from "axios";

const url = "https://api.lyrics.ovh/v1";
const myKey = "ca438dcdcda3164679f0e7942f0984cf";

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
  try {
    const data = await axios.get(
      `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${myKey}&format=json`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchTopTracks = async (artist) => {
  try {
    const data = await axios.get(
      `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artist}&api_key=${myKey}&format=json`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
