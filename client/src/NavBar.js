import React from 'react';
import { NavLink } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const NavBar = ({ handleLogout }) => {

    return (
        <AppBar style={{ padding: 'none' }}>
            <Toolbar id='navbar'>
                <NavLink to="/">
                    <div className="button-container">
                        Home
                    </div>
                </NavLink>
                    
                    
                    {/* <div className="vine-container">
                    

                    <svg className="animation-container" width="200" height="200">
                        <path id="motionPath" d="M10 100 Q 100 10, 190 100" fill="none" />
                        <circle className="animated-circle" r="10">
                        <animateMotion dur="4s" repeatCount="indefinite">
                            <mpath href="#motionPath" />
                        </animateMotion>
                        </circle>
                    </svg>
                        <div className="vine"></div>
                        <div className="vine"></div>
                        <div className="vine"></div>
                        
                    </div> */}
                <NavLink to="/createnewpotion">
                    <div className="button-container">
                        Create New Potion
                    </div>
                </NavLink>
                    {/* <div className="vine-container">
                        <div className="vine"></div>
                        <div className="vine"></div>
                        <div className="vine"></div>
                    </div>  */}
            
                <NavLink to="/shopfront">
                    <div className="button-container">
                        Shopfront
                    </div>
                </NavLink>
                    {/* <div className="vine-container">
                        <div className="vine"></div>
                        <div className="vine"></div>
                        <div className="vine"></div>
                    </div> */}
                <NavLink to="/menu">
                    <div className="button-container">
                        Menu
                    </div>
                </NavLink>
                    
                    
                    {/* <div className="vine-container">
                        <div className="vine"></div>
                        <div className="vine"></div>
                        <div className="vine"></div>
                    </div> */}
                    
                <NavLink to="/viewinventory">
                    <div className="button-container">
                        View Inventory
                    </div>
                </NavLink>
                    
                    {/* <div className="vine-container">
                        <div className="vine"></div>
                        <div className="vine"></div>
                        <div className="vine"></div>
                    </div> */}
                <NavLink to="/logout" onClick={() => handleLogout()}>
                    <div className="button-container">
                        Log Out
                    </div>
                </NavLink>
                    
                    
                    {/* <div className="vine-container">
                        <div className="vine"></div>
                        <div className="vine"></div>
                        <div className="vine"></div>
                    </div> */}
            </Toolbar>
        </AppBar>
    );
}

export default NavBar