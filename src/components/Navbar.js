import React from 'react';
import {AppBar, styled, Toolbar, Typography} from "@mui/material";
import PetsIcon from '@mui/icons-material/Pets';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
})

const Navbar = () => {
    return (
        <AppBar position="sticky">
            <StyledToolbar><Typography variant="h6">LAMA DEV</Typography></StyledToolbar>
            <PetsIcon />
        </AppBar>
    );
};

export default Navbar;