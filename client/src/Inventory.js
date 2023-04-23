import React, { useState } from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MaterialList from "./MaterialList";

const Inventory = ( { materials } ) => {
    return (
        <div>
            <header>This is the Inventory</header>


            <p>
                Here you can:

                See your Inventory
                {materials.map((material, i) => (<li key={i}> {material.name} </li>))}
                
            </p>
        </div>
    )
}

export default Inventory