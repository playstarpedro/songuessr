'use client';

import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Autocomplete,
} from '@mui/material';

import { useSpotifyStore } from '@/store/spotifyStore';

const SelectArtistPage = () => {
  const [query, setQuery] = useState('');
  const { artists, fetchArtists } = useSpotifyStore();
  const [artist, setArtist] = useState<string | null>(null);

  useEffect(() => {
    if (query.length > 2) {
      fetchArtists(query);
    }
  }, [query, fetchArtists]);

  //TODO: Create a card for spotify artists
  return (
    <Box sx={{ padding: '1.5rem', textAlign: 'center' }}>
      <Typography marginBottom={'1rem'} fontSize={18} fontWeight={600}>
        Select your artist to start guessing songs:
      </Typography>
      <Autocomplete
        value={artist}
        onChange={(event, newValue) => setArtist(newValue)}
        options={artists}
        getOptionLabel={(option) => option.name} // Mostra o nome do artista
        renderOption={(props, option) => (
          <li {...props} key={option.id}>
            {option.name}
          </li>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            placeholder="Search an artist..."
            onChange={(e) => setQuery(e.target.value)}
          />
        )}
        sx={{ width: 300, margin: '0 auto', marginBottom: '2rem' }}
      />
      {artist && (
        <Button variant="contained" color="primary">
          Continue
        </Button>
      )}
    </Box>
  );
};

export default SelectArtistPage;
