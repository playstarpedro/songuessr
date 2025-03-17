'use client';

import { Box, Button, Typography } from '@mui/material';

export default function Home() {
  return (
    <Box sx={{ padding: '1.8rem', textAlign: 'center' }}>
      <Typography marginBottom={'1rem'} fontSize={20} fontWeight={700}>
        Welcome to Songuessr!
      </Typography>
      <Typography marginBottom={'2rem'}>
        The Songuessr game will challenge you to guess songs from an artist. You
        will have a limited time to guess the song title. The faster you are,
        the better your score will be!
      </Typography>
      <Button variant="contained" color="primary">
        Start Game
      </Button>
    </Box>
  );
}
