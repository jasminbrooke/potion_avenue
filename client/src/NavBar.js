import React from 'react';
import { NavLink } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';


const NavBar = () => {
    return (
        <AppBar position="sticky" >
            <Toolbar id='navbar'>
                <NavLink to="/myprofile">My profile</NavLink>
                <NavLink to="/createnewpotion">Create New Potion</NavLink>
                <NavLink to="/shopfront">Shopfront</NavLink>
                <NavLink to="/viewinventory">View Inventory</NavLink>
            </Toolbar>
    </AppBar>
    );
}

export default NavBar