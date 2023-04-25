import React, { useState } from "react"
import Stepper from "./Stepper"

const CreateNewPotion = ( { materials } ) => {

    return(
        <div>
            <Stepper materials={materials}/>
        </div>
    )}

export default CreateNewPotion


