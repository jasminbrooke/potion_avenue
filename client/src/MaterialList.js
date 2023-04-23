import React, { useState } from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MaterialCard from "./MaterialCard";

const MaterialList = ( { materials } ) => {
    return (
        <div>
            <Box className='nav-component' display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={2}>
            {materials?.map((material, i)=> <MaterialCard key={i} material={material} />)}
            </Box>
        </div>
    )
}

export default MaterialList