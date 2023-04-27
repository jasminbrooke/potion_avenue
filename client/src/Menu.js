import React, { useState } from "react"
import { Stack } from "@mui/material"
import EditPotionCard from "./EditPotionCard";

const Menu = ( { potions } ) => {



    const handleEditPotion = () => {
        // fetch('/potion/'{}, {
        //     method: 'PATCH',
        //     headers: {
        //     'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //     // Add your data here
        //     })
        // });
        }
          
    return (
            <Stack direction="row" spacing={2} sx={{alignItems: 'center', justifyContent: 'center'}} >
                {potions?.map((potion, i)=> 
                <EditPotionCard 
                    key={i} 
                    potion={potion} 
                    // handleDeletePotion={handleDeletePotion} 
                    handleEditPotion={handleEditPotion} 
                />)}
            </Stack>
    )
}

export default Menu