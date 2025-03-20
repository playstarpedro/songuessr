import { create } from "zustand";
import { searchArtist } from "../lib/spotifyApi"

//TODO: Create global types for artists, songs, etc.
interface SpotifyState {
  artists: any[];
  fetchArtists: (query: string) => Promise<void>;
}

export const useSpotifyStore = create<SpotifyState>((set) => ({
  artists: [],
  fetchArtists: async (query: string) => {
    try {
      const artists = await searchArtist(query);
      set({ artists });
    } catch (error) {
      console.error("Error trying to search artists:", error);
    }
  },
}));
