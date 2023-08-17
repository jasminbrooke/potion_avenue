import React from 'react';
import { NavLink } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';

const NavBar = ({ handleLogout }) => {

    return (
        <AppBar>
            <Toolbar id='navbar'>
                <div className="button-container">
                    <Button sx={{ minWidth: '40vh', minHeight: '15vh' }}>
                        <NavLink to="/">Home</NavLink>
                    </Button>
                    <div className="vine-container">
                        <div className="vine"></div>
                        <div className="vine"></div>
                        <div className="vine"></div>
                        
                    </div>

                </div>
                <div className="button-container">
                    <Button sx={{minWidth: '40vh', minHeight: '15vh'}}>
                        <NavLink 
                            to="/createnewpotion">Create New Potion</NavLink>
                    </Button>
                        <div className="vine-container">
                        <div className="vine"></div>
                        <div className="vine"></div>
                        <div className="vine"></div>
                    </div> </div>
                <div className="button-container">
                    <Button sx={{minWidth: '40vh', minHeight: '15vh'}}>
                        <NavLink 
                            to="/shopfront">Shopfront</NavLink>
                    </Button>
                        <div className="vine-container">
                        <div className="vine"></div>
                        <div className="vine"></div>
                        <div className="vine"></div>
                    
                    </div></div>
                <div className="button-container">
                    <Button sx={{minWidth: '40vh', minHeight: '15vh'}}>
                        <NavLink 
                            to="/menu">Menu</NavLink>
                    </Button>
                        <div className="vine-container">
                        <div className="vine"></div>
                        <div className="vine"></div>
                        <div className="vine"></div>
                    
                    </div></div>
                    <div className="button-container">
                    <Button sx={{minWidth: '40vh', minHeight: '15vh'}}>
                        <NavLink 
                            to="/viewinventory">View Inventory</NavLink>
                    </Button>
                        <div className="vine-container">
                        <div className="vine"></div>
                        <div className="vine"></div>
                        <div className="vine"></div>
                    
                    </div></div>
                <div className="button-container">
                    <Button sx={{minWidth: '40vh', minHeight: '15vh'}}>
                        <NavLink 
                    to="/" onClick={() => handleLogout()}>Log Out</NavLink>
                    </Button>
                        <div className="vine-container">
                        <div className="vine"></div>
                        <div className="vine"></div>
                        <div className="vine"></div>
                    </div></div>
            </Toolbar>
    </AppBar>
    );
}

export default NavBar