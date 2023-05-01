import React, { useState, useEffect } from "react"
import MaterialSelector from "./MaterialSelector";
import ScienceIcon from '@mui/icons-material/Science';
import IconButton from '@mui/material/IconButton';
import { Typography } from "@mui/material";

const SlotCard = ( { 
    selectedRecipe, 
    brewingMaterials, 
    handleMixture, 
    materials, 
    handleBrew, 
    handleMix, 
    slot, 
    selectedCard, 
    onSelect, 
    setSelectedCard,
    handleServe
    } ) => {

    const [readytoBrew, setReadytoBrew] = useState(false)
    const [brewing, setBrewing] = useState(false)
    const [readytoServe, setReadytoServe] = useState(false)
    const [message, setMessage] = useState('')
    const timer = selectedRecipe.brew_time

    //change logic so materialSelector is its own state, that way the card be deselected when brewing
    // selectionMode? 
    //put customers name on Card????

    const handleClick = (brewingMaterials) => {
        console.log(brewingMaterials)
        console.log(selectedRecipe)
        handleMix(brewingMaterials)
        setReadytoBrew(true)
        setMessage('Ready to brew!')
    }

    const handleBottleClick = () => {
        if (readytoServe) {
            handleServe()
            setReadytoBrew(false)
            setSelectedCard(null)
        } else {
            setBrewing(true)
            setMessage('Brewing...')
            handleBrew()
            setTimeout(() => {
                setBrewing(false);
                setReadytoServe(true)
                setMessage('Ready to Serve!')
            }, timer * 1000);
        }
    }

    const fullBottle = {
        color: 'success',
        opacity: '1'
    }

    const emptyBottle = {
        color: '#FFFFFF',
        opacity: '0.5',
    }

    const renderCard = () => {
        if (selectedCard === slot && !readytoBrew) {
            return (
                <>
                <MaterialSelector 
                    materials={materials}  
                    brewingMaterials={brewingMaterials} 
                    handleMixture={handleMixture}
                    handleMix={handleMix}
                    />
                    <IconButton onClick={() => handleClick(brewingMaterials)}> Mix! </IconButton>
                    <> {brewingMaterials.map((material) => <p key={material.id}> {material.name} </p>)} </>
                </>
            )
        } else if (readytoBrew) {
            return (
                <>
                    <IconButton
                        disabled={brewing}
                        onClick={() => handleBottleClick()}>
                        <ScienceIcon sx={{ ...fullBottle, fontSize: 150 }} />
                    </IconButton>
                    <p>{message}</p>
                </>
            )
        } else {
            return (
                <>
                    <IconButton 
                        onClick={() => onSelect(slot)}
                        disabled={selectedCard && selectedCard === slot} 
                        >
                        <ScienceIcon sx={{ ...emptyBottle, fontSize: 150 }} />
                    </IconButton>   
                </>
            )
        }
    }

    return (
        <div>
            {renderCard()}
        </div>
    )
}

export default SlotCard;