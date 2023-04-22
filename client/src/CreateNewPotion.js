import React, { useState } from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MixMaterials from "./MixMaterials";
import Stepper from "./Stepper"

const CreateNewPotion = ( { materials } ) => {


    return(
        <div>
            <Stepper materials={materials}/>
        </div>
    )}

export default CreateNewPotion


