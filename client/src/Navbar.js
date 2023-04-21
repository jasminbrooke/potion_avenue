import React from 'react';
import { NavLink } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';





const Navbar = () => {
    <AppBar>
    <Toolbar id='navbar'>
        <NavLink to="/1">1</NavLink>
        <NavLink to="/2">2</NavLink>
        <NavLink to="/3">3</NavLink>
        <NavLink to="/4">4</NavLink>
    </Toolbar>
</AppBar>

}

export default Navbar