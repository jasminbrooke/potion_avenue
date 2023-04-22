import React, { useState } from "react"
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from "@mui/material/FormControlLabel";
import MaterialList from "./MaterialList";


const MixMaterials = ( { materials } ) => {

    return (

      <div>
      <MaterialList materials={materials}/>
      </div>
    );
  };
  


export default MixMaterials