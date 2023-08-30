import React, { useEffect, useState } from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useSelector } from "react-redux";

const Inventory = () => {
  const materials = useSelector(state => state.MaterialReducer.materials)
  const [loading, setLoading] = useState(materials.length === 0)

  useEffect(() => {
    setLoading(materials.length === 0)
  }, [materials])

  const rows = materials?.map((material) => ({
    name: material.name, 
    cost: material.cost, 
    time: material.brew_time, 
    description: material.description,
    quality: material.quality
  }))

  const renderMaterials = () => {
    return loading ? <p>Loading...</p> : materialTable
  }

  const materialTable = () => (
    <div>
      <TableContainer sx={{ width: 600, margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Table sx={{ minWidth: 400, padding: '8px', fontSize: '14px'}} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Material</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Cost</TableCell>
              <TableCell>Quality</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row, index) => (
              <TableRow key={index} sx={{'&:hover': { backgroundColor: 'rgba(245, 245, 245, 0.8)' }}}>
                <TableCell component="th" scope="row" >{row.name}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.time} </TableCell>
                <TableCell>{row.cost}</TableCell>
                <TableCell>{row.quality}</TableCell>
                <TableCell sx={{ padding: '4px' }}></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )

  return (
    {renderMaterials}
  )
}

export default Inventory