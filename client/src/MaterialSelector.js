import React from "react"
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';


const MaterialSelector = ( { handleMixture, brewingMaterials, materials } ) => {

    const materialGrid = (
        <div>
          <Box
            sx={{ backgroundColor: "white" }}
            display="grid" 
            gridTemplateColumns="repeat(4, 1fr)" 
            gap={2} 
            justifyItems="center" 
            alignItems="center">
            {
                materials?.map((material, i) => {
                    const included = brewingMaterials?.includes(material) === true
                    return(
                        <IconButton 
                        key={i} 
                        onClick={() => handleMixture(material)}
                        sx={{ opacity: included ? 0.5 : 1 }}
                        >
                            {material.description}
                        </IconButton>
                    )
                })
            }
          </Box>
        </div>
      );
      
    return (
        materialGrid
    )
    
}

export default MaterialSelector