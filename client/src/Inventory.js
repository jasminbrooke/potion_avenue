import React, { useState } from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import MacroOffIcon from '@mui/icons-material/MacroOff';

const Inventory = ( { materials } ) => {
  const [cartItems, setCartItems] = useState([]);

  const IncreaseQuantity = (material) => {
  } 

  const DecreaseQuantity = () => {
  } 

    const rows = materials.map((material, i) => ({
        name: material.name, 
        cost: material.cost, 
        time: material.time, 
        reward: material.reward,
        description: material.description,
        quantity: material.quantity
    }))

    return (
        <div>
            <TableContainer sx={{ width: 850, margin: 'auto' }}>
      <Table sx={{ minWidth: 400, padding: '8px', fontSize: '14px'}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell >Material</TableCell>
            <TableCell >Description</TableCell>
            <TableCell >Time</TableCell>
            <TableCell >Cost</TableCell>
            <TableCell >Profit</TableCell>
            <TableCell >Quantity</TableCell>
            <TableCell >Add to Cart</TableCell>
            

          </TableRow>
        </TableHead>
        <TableBody>
        {rows.map((row, index) => (
  <TableRow key={index} sx={{'&:hover': { backgroundColor: 'rgba(245, 245, 245, 0.8)' }}}>
    <TableCell component="th" scope="row" >{row.name}</TableCell>
    <TableCell >{row.description}</TableCell>
    <TableCell >{row.time} </TableCell>
    <TableCell >{row.cost}</TableCell>
    <TableCell >{row.reward}</TableCell>
    <TableCell> {row.quantity} </TableCell>

    <TableCell sx={{ padding: '4px' }}>
      
      
    <IconButton sx={{ fontSize: '12px' }} onClick={() => IncreaseQuantity(row)}> <LocalFloristIcon sx={{ fontSize: 'medium' }}/>Add</IconButton>
      <IconButton sx={{ fontSize: '12px' }} onClick={() => DecreaseQuantity(row)}> <MacroOffIcon sx={{ fontSize: 'medium' }}/>Remove</IconButton>
      
      
      </TableCell>
  </TableRow>
))}

<TableRow>
        <TableCell colSpan={4} />
        <TableCell>Total Cost: </TableCell>
        <TableCell>{/* {cart.reduce((total, item) => total + item.cost, 0)} */} aMt </TableCell>
        <TableCell colSpan={2}> <Button type='submit'>Submit</Button> </TableCell>
        
        </TableRow>

</TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

export default Inventory