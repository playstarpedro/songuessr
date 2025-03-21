import { Typography } from '@mui/material';

import theme from '../../theme';

type TagProps = {
  text: string;
};

const Tag: React.FC<TagProps> = ({ text }) => {
  return (
    <Typography
      variant="caption"
      sx={{
        display: 'flex',
        fontWeight: 700,
        color: '#fff',
        padding: '0.2rem',
        maxHeight: '2rem',
        paddingX: '0.6rem',
        whiteSpace: 'nowrap',
        borderRadius: '31.25rem',
        backgroundColor: theme.palette.primary.dark,
      }}
    >
      {text}
    </Typography>
  );
};

export default Tag;
