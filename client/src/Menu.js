import React, { useState } from "react"
import { Stack } from "@mui/material"
import EditPotionCard from "./EditPotionCard";
import { useSelector } from "react-redux"
import Box from '@mui/material/Box';


const Menu = () => {
    const potions = useSelector(state => state.PotionReducer.potions)
          
    return (
            <Stack direction="row" spacing={2} sx={{alignItems: 'center', justifyContent: 'center'}} >
                {
                    potions?.map((potion, i) => (
                        <EditPotionCard 
                            key={i} 
                            potion={potion} 
                        />
                    ))
                }
            </Stack>
    )
}

export default Menu