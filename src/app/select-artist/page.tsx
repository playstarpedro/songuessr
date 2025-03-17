'use client';

import { useState } from 'react';

import { Autocomplete, Box, Button, TextField, Typography } from '@mui/material';

const MOCK_ARTISTS = [
  'Drake',
  'Kanye West',
  'Tyler, The Creator',
  'The Weeknd',
  'Travis Scott',
];

const SelectArtistPage = () => {
  const [artist, setArtist] = useState<string | null>(null);

  return (
    <Box sx={{ padding: '1.5rem', textAlign: 'center' }}>
      <Typography marginBottom={'1rem'} fontSize={18} fontWeight={600}>
        Select your artist to start guessing songs:
      </Typography>
      <Autocomplete
        value={artist}
        options={MOCK_ARTISTS}
        onChange={(event, newValue) => setArtist(newValue)}
        renderInput={(params) => <TextField {...params} variant="outlined" />}
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
