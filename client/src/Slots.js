import React, { useState } from "react"
import Stack from '@mui/material/Stack';
import PotionCard from "./PotionCard";
import Card from '@mui/material/Card';
import { CardActionArea, Typography } from "@mui/material"; 
import ScienceIcon from '@mui/icons-material/Science';
import IconButton from '@mui/material/IconButton';
import Box from "@mui/material/Box";
import MaterialSelector from "./MaterialSelector";
import SlotCard from './SlotCard'

const Slots = ({
    selectedRecipe,
    brewingMaterials,
    handleMixture,
    materials,
    readytoBrew,
    handleBrew,
    handleMix,
    handleServe
 }) => {
    const slots = [1, 2, 3, 4, 5]
    const [selectedCard, setSelectedCard] = useState(null)
    const onSelect = (slot) => setSelectedCard(slot)

    return (
        <Stack direction="row">
            {slots.map((slot, i) => (
                <Card key={i} style={{ backgroundColor: 'rgba(0, 0, 0, 0)', height: 300, width: 300 }}>
                        <SlotCard
                            readytoBrew={readytoBrew}
                            materials={materials}
                            selectedRecipe={selectedRecipe}
                            brewingMaterials={brewingMaterials}
                            handleMixture={handleMixture}
                            handleBrew={handleBrew}
                            handleMix={handleMix}
                            slot={slot}
                            selectedCard={selectedCard}
                            onSelect={onSelect}
                            setSelectedCard={setSelectedCard}
                            handleServe={handleServe}
                        />
                </Card>
            ))}
        </Stack>
        );
}

export default Slots