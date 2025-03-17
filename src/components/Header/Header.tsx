import { AppBar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        padding: 2.5,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'primary',
        justifyContent: 'space-between',
      }}
    >
      <Typography fontSize={24} fontWeight={700}>
        Songuessr
      </Typography>
    </AppBar>
  );
};

export default Header;
