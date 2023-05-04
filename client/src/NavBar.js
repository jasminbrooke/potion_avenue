import React from 'react';
import { NavLink } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';


const NavBar = ({ handleLogout }) => {

    return (
        <AppBar position="sticky" style={{ backgroundColor: 'black', opacity: 0.5 }} >
            <Toolbar id='navbar'>
                <NavLink to="/manageaccount">Manage Account</NavLink>
                <NavLink to="/createnewpotion">Create New Potion</NavLink>
                <NavLink to="/shopfront">Shopfront</NavLink>
                <NavLink to="/menu">Menu</NavLink>
                <NavLink to="/viewinventory">View Inventory</NavLink>
                <NavLink to="/" onClick={() => handleLogout()}>Log Out</NavLink>
            </Toolbar>
    </AppBar>
    );
}

export default NavBar