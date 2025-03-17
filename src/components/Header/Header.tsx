import { AppBar, Typography } from "@mui/material"

const Header = () => {
    return (
        <AppBar sx={{
            padding: 2.5,
            color: "black",
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: "#1ed760",
            justifyContent: 'space-between',
        }}>
            <Typography
                fontSize={24}
                fontWeight={700}>
                    Songuessr
            </Typography>
        </AppBar>
    )
}

export default Header