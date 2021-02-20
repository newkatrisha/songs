import axios from "axios";
import { Dispatch } from "redux";
import { ArtistType, TrackType, MusicDispatchTypes, GET_ARTISTS, GET_ARTISTS_ERROR, GET_LYRICS, GET_LYRICS_ERROR, GET_TOP_TRACKS } from "./actionTypes";

// const url = "https://api.lyrics.ovh/v1";
export const myKey = "ca438dcdcda3164679f0e7942f0984cf";

export const fetchArtists = () => async (dispatch: Dispatch<MusicDispatchTypes>) => {
  try {
    const res = await axios.get(
      `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${myKey}&format=json`
    );
    const artists = res.data.artists.artist.map((item: ArtistType) => item.name)

    dispatch({
      type: GET_ARTISTS,
      payload: artists

    });
  } catch (error) {
    dispatch({
      type: GET_ARTISTS_ERROR,
    });
  }
}

// export const fetchTopTracks = (artist:string) => async (dispatch: Dispatch<MusicDispatchTypes> ) => {
//   try {
//     const res = await axios.get(
//       `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artist}&api_key=${myKey}&format=json`
//     );
//     const tracks = res.data.toptracks.track.map((item: TrackType) => item.name)
//     dispatch({
//       type: GET_TOP_TRACKS,
//       payload: tracks
//     })
//   } catch (error) {
//     console.log(error);
//   }
// };


// export const fetchLyrics = (artist: string, song: any) => async (dispatch: Dispatch) => {
//   let changeableUrl: string = url;
//   // if (artist, song) {
//   //   changeableUrl = `${url}/${artist}/${song}`;
//   // }
//   try {
//     const lyrics = await axios.get(changeableUrl);
//     console.log(lyrics);
//     dispatch({
//       type: GET_LYRICS,
//       payload: lyrics.data.lyrics,
//     });
//   } catch (error) {
//     dispatch({
//       type: GET_LYRICS_ERROR,
//     });
//   }
// };
