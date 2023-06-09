import React, { useState } from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useSelector } from "react-redux";

const Inventory = () => {
  const materials = useSelector(state => state.MaterialReducer.materials)

    const rows = materials.map((material, i) => ({
        name: material.name, 
        cost: material.cost, 
        time: material.brew_time, 
        description: material.description,
        quality: material.quality
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
            <TableCell >Quality</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
        {rows.map((row, index) => (
  <TableRow key={index} sx={{'&:hover': { backgroundColor: 'rgba(245, 245, 245, 0.8)' }}}>
    <TableCell component="th" scope="row" >{row.name}</TableCell>
    <TableCell >{row.description}</TableCell>
    <TableCell >{row.time} </TableCell>
    <TableCell >{row.cost}</TableCell>
    <TableCell >{row.quality}</TableCell>

    <TableCell sx={{ padding: '4px' }}>
      
      </TableCell>
  </TableRow>
))}

</TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

export default Inventory