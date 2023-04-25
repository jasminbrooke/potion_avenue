import React, { useState } from "react"
import Stack from '@mui/material/Stack';
import PotionCard from "./PotionCard";

const PotionList = ( { potions } ) => {
    return (
        <div>
            <Stack direction="row" spacing={2} sx={{alignItems: 'center', justifyContent: 'center'}}>
                {potions?.map((potion, i)=> <PotionCard key={i} potion={potion} />)}
            </Stack>
        </div>
    )
}

export default PotionList