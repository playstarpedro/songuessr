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
import ArtistCard from '@/components/ArtistCard/ArtistCard';

const SelectArtistPage = () => {
  const [query, setQuery] = useState('');
  const { artists, fetchArtists, selectedArtist, setSelectedArtist } =
    useSpotifyStore();

  useEffect(() => {
    if (query.length > 2) {
      fetchArtists(query);
    }
  }, [query, fetchArtists]);

  return (
    <Box sx={{ padding: '1.5rem' }}>
      <Typography
        marginBottom={'1rem'}
        fontSize={18}
        fontWeight={600}
        align="center"
      >
        Select your artist to start guessing songs:
      </Typography>
      <Autocomplete
        value={selectedArtist}
        onChange={(event, newValue) => setSelectedArtist(newValue)}
        options={artists}
        getOptionLabel={(option) => option.name}
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
      {selectedArtist && (
        <Box>
          <ArtistCard
            artist={selectedArtist}
            sx={{ margin: '0 auto', marginBottom: '1rem' }}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{ margin: '0 auto', display: 'block' }}
          >
            Continue
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default SelectArtistPage;
