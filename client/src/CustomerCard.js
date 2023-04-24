import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import { CardActionArea } from "@mui/material";

const CustomerCard = ({customer}) => {
    const {name:{first, last}, dob: {age}, picture: {thumbnail}, request, build} = customer



    
    return (
        <div>
            <Card>
            <CardActionArea>
            <img
            floated='right'
            size='mini'
            src={thumbnail}
          />
            {first}
            </CardActionArea>
            </Card>
        </div>
    )
    
}

export default CustomerCard