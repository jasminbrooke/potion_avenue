import React, { useEffect, useState } from "react";
import CustomerCard from "./CustomerCard"
import Grid from '@mui/material/Grid'; // Grid version 1
import Stack from '@mui/material/Stack';

const CustomerList = ( {customerArray} ) => {
    
    return (
        <Stack direction="row" spacing={2} sx={{alignItems: 'center', justifyContent: 'center'}} >
            {customerArray.map((customer, i) => <CustomerCard key={i} customer={customer} />)}
        </Stack>
    )}

export default CustomerList