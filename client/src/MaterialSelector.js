import React, { useEffect, useState } from "react"
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MaterialCard from "./MaterialCard";
import ScienceIcon from '@mui/icons-material/Science';
import IconButton from '@mui/material/IconButton';


const MaterialSelector = ( { handleMixture, brewingMaterials, materials } ) => {

    const materialGrid = (
        <div>
          <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={2}>
            {
                materials?.map((material, i) => {
                    const included = brewingMaterials?.includes(material) === true
                    const iconStyle = {
                       color: included ? "lightblue" : ('#FFFFFF' + '80')
                    }
                    return(
                        <IconButton key={i} onClick={() => handleMixture(material)}>
                            <ScienceIcon sx={{...iconStyle}}/>
                        </IconButton>
                    )
                })
            }
          </Box>
        </div>
      );
      

    const loading = ( <p> Loading... </p> )

    return (
        materialGrid
    )
    
}

export default MaterialSelector