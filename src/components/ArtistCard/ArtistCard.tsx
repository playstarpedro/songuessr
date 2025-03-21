import { Box, Card, List, ListItem, SxProps, Typography } from '@mui/material';

import Tag from '../Tag/Tag';
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
        gap: '1rem',
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
        src={artist.images[0].url || 'https://placehold.co/'}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Typography fontSize={30}>{artist.name}</Typography>
        <List
          disablePadding
          sx={{
            gap: '0.4rem',
            display: 'flex',
            flexWrap: 'wrap',
            overflowY: 'scroll',
            maxHeight: '3.75rem',
          }}
        >
          {artist.genres &&
            artist.genres.map((genre) => (
              <ListItem key={genre} disablePadding sx={{ width: 'auto' }}>
                <Tag text={genre} />
              </ListItem>
            ))}
        </List>
      </Box>
    </Card>
  );
};

export default ArtistCard;
