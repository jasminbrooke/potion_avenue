import React, { useState } from "react"
import PotionCard from "./PotionCard"
import { Stack } from "@mui/material"
import Container from '@mui/material/Container';

const Menu = ( { potions } ) => {

    // const handleDeletePotion = () => {
    //     fetch('/potion/'{}, {
    //       method: 'DELETE'
    //     });
    //   }
    // const handleEditPotion = () => {
    //     fetch('/potion/'{}, {
    //         method: 'PATCH',
    //         headers: {
    //         'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //         // Add your data here
    //         })
    //     });
    //     }
          
    return (
            <Stack direction="row" spacing={2} sx={{alignItems: 'center', justifyContent: 'center'}} >
                {potions?.map((potion, i)=> <PotionCard key={i} potion={potion} />)}
            </Stack>
    )
}

export default Menu