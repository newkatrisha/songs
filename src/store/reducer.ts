import {  MusicDispatchTypes, GET_ARTISTS, GET_ARTISTS_ERROR, GET_TOP_TRACKS } from "./actionTypes";

interface LyricsStateI {
  artists: string[],
  lyrics: string,
}

const initState: LyricsStateI = {
   artists: [],
    lyrics: '',
};



function reducer(state: LyricsStateI = initState, action: MusicDispatchTypes) {

  switch (action.type) {
    case GET_ARTISTS:
      return {
        ...state,
        artists: action.payload
      };
    // case "GET_ARTISTS_ERROR":
    //   return state;
    // case "GET_LYRICS":
    //   return {
    //     ...state,
    //     lyrics: action.payload,
    //   };
    // case "GET_LYRICS_ERROR":
    //   return state;
    // case GET_TOP_TRACKS:
    //   return {
    //     ...state,
    //     tracks: action.payload
    //   }
    default:
      return state;
  }
}

export default reducer;
