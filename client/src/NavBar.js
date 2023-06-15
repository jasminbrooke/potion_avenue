import React from 'react';
import { NavLink } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';


const NavBar = ({ handleLogout }) => {

    return (
        <AppBar position="sticky" style={{ backgroundColor: 'black', opacity: 0.5 }} >
            <Toolbar id='navbar'>
                <NavLink className={isActive =>(!isActive ? "" : "active-link")} 
                to="/">Home</NavLink>
                <NavLink className={isActive =>(!isActive ? "" : "active-link")} 
                to="/manageaccount">Manage Account</NavLink>
                <NavLink className={isActive =>(!isActive ? "" : "active-link")} 
                to="/createnewpotion">Create New Potion</NavLink>
                <NavLink className={isActive =>(!isActive ? "" : "active-link")} 
                to="/shopfront">Shopfront</NavLink>
                <NavLink className={isActive =>(!isActive ? "" : "active-link")} 
                to="/menu">Menu</NavLink>
                <NavLink className={isActive =>(!isActive ? "" : "active-link")} 
                to="/viewinventory">View Inventory</NavLink>
                <NavLink className={isActive =>(!isActive ? "" : "active-link")} 
                to="/" onClick={() => handleLogout()}>Log Out</NavLink>
            </Toolbar>
    </AppBar>
    );
}

export default NavBar