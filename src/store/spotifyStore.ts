import { create } from "zustand";
import { searchArtist } from "../lib/spotifyApi"
import { Artist } from "@/types";

interface SpotifyState {
  artists: Artist[];
  selectedArtist: Artist | null;
  fetchArtists: (query: string) => Promise<void>;
  setSelectedArtist: (artist: Artist | null) => void;
}

export const useSpotifyStore = create<SpotifyState>((set) => ({
  artists: [],
  selectedArtist: null,

  fetchArtists: async (query: string): Promise<void> => {
    try {
      const artists = await searchArtist(query);
      set({ artists });
    } catch (error) {
      console.error("Error trying to search artists:", error);
    }
  },

  setSelectedArtist: (artist) => set({ selectedArtist: artist }),
}));
