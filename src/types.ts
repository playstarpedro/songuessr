export type Artist = {
    id: string;
    name: string;
    imageUrl?: string;
    genres?: string[];
  };
  
  export type Album = {
    id: string;
    name: string;
    releaseDate: string;
    coverUrl?: string;
  };
  
  export type Track = {
    id: string;
    name: string;
    durationMs: number;
    album: Album;
    artists: Artist[];
  };
  