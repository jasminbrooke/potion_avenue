import React from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Inventory = ( { materials } ) => {
    const rows = materials.map((material, i) => ({
        name: material.name, 
        cost: material.cost, 
        time: material.time, 
        reward: material.reward,
        description: material.description
    }))

    return (
        <div>
            <TableContainer component={Paper}>
      <Table sx={{ width: '50%', minWidth: 400, margin: 'auto' }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Material</TableCell>
            <TableCell >Description</TableCell>
            <TableCell >Time</TableCell>
            <TableCell >Cost</TableCell>
            <TableCell >Profit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {rows.map((row, index) => (
  <TableRow key={index}>
    <TableCell component="th" scope="row">{row.name}</TableCell>
    <TableCell >{row.description}</TableCell>
    <TableCell >{row.time} </TableCell>
    <TableCell >{row.cost}</TableCell>
    <TableCell >{row.reward}</TableCell>
  </TableRow>
))}

</TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

export default Inventory