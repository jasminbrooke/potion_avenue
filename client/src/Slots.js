import React, { useState } from "react"
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import SlotCard from './SlotCard'

const Slots = ({
    materials,
    readytoBrew,
    handleBrew,
    handleServe,
    currentCustomer,
 }) => {
    const slots = [1, 2, 3]
    const [selectedSlot, setSelectedSlot] = useState(null)

    const onSelect = (slot) => {
        setSelectedSlot(slot)
    }

    return (
        <Stack direction="row">
            {slots.map((slot, i) => (
                <Card key={i} style={{ backgroundColor: 'rgba(0, 0, 0, 0)', height: 300, width: 300 }}>
                        <SlotCard
                            readytoBrew={readytoBrew}
                            materials={materials}
                            handleBrew={handleBrew}
                            slot={slot}
                            selectedSlot={selectedSlot}
                            onSelect={onSelect}
                            setSelectedSlot={setSelectedSlot}
                            handleServe={handleServe}
                            currentCustomer={currentCustomer}
                        />
                </Card>
            ))}
        </Stack>
        );
}

export default Slots