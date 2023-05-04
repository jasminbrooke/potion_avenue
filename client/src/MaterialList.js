import React, { useState } from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MaterialCard from "./MaterialCard";

const MaterialList = ( { setMixture, materials, mixture, reset } ) => {

    const materialGrid = (
        <div>
            <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={2}>
                {materials?.map((material, i)=> <MaterialCard key={i} material={material} setMixture={setMixture} mixture={mixture} reset={reset}/>)}
            </Box>
        </div>
    )

    const loading = ( <p> Loading... </p> )

    return (
        materialGrid
    )
    
}

export default MaterialList