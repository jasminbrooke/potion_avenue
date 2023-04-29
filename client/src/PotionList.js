import React, { useState } from "react"
import Stack from '@mui/material/Stack';
import PotionCard from "./PotionCard";

const PotionList = ( { potions, selectedRecipe, mixture, handleMixture } ) => {
    // const potions = useSelector(state => state.PotionReducer.potions)

    return (
        <div>
            <Stack direction="row" spacing={2} sx={{alignItems: 'center', justifyContent: 'center'}}>
                {potions?.map((potion, i)=> <PotionCard key={i} potion={potion} selectedRecipe={selectedRecipe} mixture={mixture} handleMixture={handleMixture} />)}
            </Stack>
        </div>
    )
}

export default PotionList