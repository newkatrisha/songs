export const GET_ARTISTS = "GET_ARTISTS";
export const GET_ARTISTS_ERROR = "GET_ARTISTS_ERROR";
export const GET_LYRICS = "GET_LYRICS";
export const GET_LYRICS_ERROR = "GET_LYRICS_ERROR";
export const GET_TOP_TRACKS = "GET_TOP_TRACKS";

export type ArtistType = {
    name: string
}

export type TrackType = {
    name: string
}

export interface GetArtists {
    type: typeof GET_ARTISTS,
    payload: string[]
    
}

export interface GetArtistsError {
    type: typeof GET_ARTISTS_ERROR
}

export interface GetLyrics {
    type: typeof GET_LYRICS
}

export interface GetLyricsError {
    type: typeof GET_LYRICS_ERROR
}
export interface GetTopTracks {
    type: typeof GET_TOP_TRACKS,
    payload: string[]
    
}

export type MusicDispatchTypes = GetArtists | GetArtistsError | GetLyrics | GetLyricsError | GetTopTracks