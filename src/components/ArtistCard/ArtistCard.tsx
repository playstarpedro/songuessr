'use client'

import { Box, Card, SxProps, Typography } from '@mui/material';

import theme from '../../theme';
import { Artist } from '../../types';

type ArtistCardProps = {
  artist: Artist;
  sx?: SxProps;
};

const ArtistCard: React.FC<ArtistCardProps> = ({ artist, sx = {} }) => {
  return (
    <Card
      sx={{
        gap: '2rem',
        height: '100%',
        display: 'flex',
        padding: '1rem',
        maxWidth: '37.5rem',
        backgroundColor: theme.palette.secondary.main,
        border: `2px solid ${theme.palette.secondary.light}`,
        ...sx,
      }}
    >
      <img
        width={130}
        height={130}
        alt={`${artist.name} image`}
        src={artist.imageUrl || 'https://placehold.co/'}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Typography fontSize={30}>{artist.name}</Typography>
        <Box sx={{ display: 'flex', gap: '0.5rem' }}>
          {artist.genres &&
            artist.genres.map((genre) => (
              <Typography
                key={genre}
                variant="caption"
                sx={{
                  color: '#fff',
                  padding: '0.2rem',
                  paddingX: '0.6rem',
                  borderRadius: '31.25rem',
                  backgroundColor: theme.palette.primary.dark,
                }}
              >
                {genre}
              </Typography>
            ))}
        </Box>
      </Box>
    </Card>
  );
};

export default ArtistCard;
