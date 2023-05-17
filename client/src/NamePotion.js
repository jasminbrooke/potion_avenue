import React from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

const NamePotion = ( { handleSubmit, potionErrors, handleDescription, handleName, name, description } ) => {

 return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}> 
        <form onSubmit={(e) => handleSubmit(e)}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <TextField
                    value={name}
                    error={potionErrors.name?.[0]}
                    helperText={potionErrors.name?.[0]}
                    onChange={(e) => handleName(e.target.value)}
                    label="Potion Name" 
                    variant="standard" 
                    sx={{ flex: 1, mr: 2 }}
                />
                
                <TextField
                    value={description}
                    onChange={(e) => handleDescription(e.target.value)}
                    label="Potion Description" 
                    variant="standard" 
                    sx={{ flex: 1}}
                />
            </Box>
            <Button 
                id="gooey-button" 
                type="submit"
            > Concoct Potion
            </Button>
        </form>
    </Box>
    )}

export default NamePotion
