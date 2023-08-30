import React from "react"
import { Stack } from "@mui/material"
import EditPotionCard from "./EditPotionCard";
import { useSelector } from "react-redux"


const Menu = () => {
    const potions = useSelector(state => state.PotionReducer.potions)
          
    return (
        <Stack 
        direction="row" spacing={2} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh'}} 
        // direction="row" spacing={2} width={'50vh'} sx={{display: 'grid', justifyContent: 'center', alignItems: 'center', height: '80vh', 
        // gridTemplateColumns: 'repeat(5, 1fr)', gap: '2rem'}}
        // >
        >
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