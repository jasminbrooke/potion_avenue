import React, { useState } from "react"
import Box from '@mui/material/Box';
import PotionCard from "./PotionCard";

const PotionList = ( { potions } ) => {
    return (
        <div>
            <Box className='nav-component' display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={2}>
            {potions?.map((potion, i)=> <PotionCard key={i} potion={potion} />)}
            </Box>
        </div>
    )
}

export default PotionList