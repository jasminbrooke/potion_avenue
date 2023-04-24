import React, { useEffect, useState } from "react";
import CustomerCard from "./CustomerCard"
import Grid from '@mui/material/Grid'; // Grid version 1

const CustomerList = ( {customerArray} ) => {
    
    
    return (

        <Grid container spacing={2} >
            <div>
            {customerArray.map((customer, i) => <CustomerCard key={i} customer={customer}/>)}
            </div>
        </Grid>
    )
    
}

export default CustomerList