import React, { useEffect, useRef, useState} from "react"
import MaterialSelector from "./MaterialSelector";
import ScienceIcon from '@mui/icons-material/Science';
import IconButton from '@mui/material/IconButton';

const SlotCard = ( { 
    brewingMaterials, 
    handleMixture, 
    materials, 
    handleBrew, 
    handleMix, 
    slot, 
    selectedSlot, 
    onSelect, 
    setSelectedSlot,
    handleServe,
    currentCustomer
    } ) => {
    const [ready, setReady] = useState('toStart')
    const [brewing, setBrewing] = useState(false)
    const [message, setMessage] = useState('')
    const timer = currentCustomer?.request?.brew_time
    const customer = useRef(currentCustomer)

    useEffect(() => {
        if (selectedSlot === slot) {
            customer.current = currentCustomer;
        }
      }, [selectedSlot]);

    const handleClickMix = (brewingMaterials) => {
        setReady('toBrew')
        handleMix(brewingMaterials, customer.current)
        setMessage('Ready to brew!')
    }

    const handleBottleClick = () => {
        if (ready === 'toBrew') {
            setBrewing(true)
            setMessage('Brewing...')
            handleBrew(customer.current)
            setTimeout(() => {
                setBrewing(false);
                setReady('toServe')
                setMessage('Ready to Serve! ' + customer?.current?.name?.first) 
            }, timer * 1000);
        } else if (ready === 'toServe') {
            handleServe(customer.current)
            setReady('toStart')
            setSelectedSlot(null)
        } else {
            console.log(ready)
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


    const renderSelector = () => {
        return (
            <>
            <MaterialSelector 
                materials={materials}  
                brewingMaterials={brewingMaterials} 
                handleMixture={handleMixture}
                handleMix={handleMix}
                />
                <IconButton onClick={() => handleClickMix(brewingMaterials)}> Mix! </IconButton>
                <> {brewingMaterials.map((material) => <p key={material.id}> {material.name} </p>)} </>
            </>
        )
    }

    const renderCard = () => {
        if (ready === 'toStart') {
            return (
                <>
                    <IconButton 
                        onClick={() => onSelect(slot)}
                        disabled={!currentCustomer}
                        // selectedSlot && !(selectedSlot === slot) && 
                        >
                        <ScienceIcon sx={{ ...emptyBottle, fontSize: 150 }} />
                    </IconButton>   
                </>
            )
        } else {
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
        }
    }

    return (
        selectedSlot === slot && ready === 'toStart'
          ? renderSelector()
          : renderCard()
      )
}

export default SlotCard;