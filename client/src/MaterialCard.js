import React, { useState } from "react"
import Card from '@mui/material/Card';
import { CardActionArea } from "@mui/material";
import CardHeader from '@mui/material/CardHeader';
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { addMaterial, removeMaterial } from "./actions/materialActions";
import { useDispatch, useSelector } from "react-redux"

const MaterialCard = ( { material } ) => {
    const materialArray = useSelector(state => state.MaterialReducer.materials)
    const [isSelected, setIsSelected] = useState(false);
    const dispatch = useDispatch();
    const disabled = !isSelected && materialArray.length === 3

    const handleClick = () => {
        if (isSelected) {
            dispatch(removeMaterial(material))
            setIsSelected(!isSelected)
        } else if (materialArray.length < 3) {
            dispatch(addMaterial(material))
            setIsSelected(!isSelected)
        } 
    }

    const cardStyle =
    {
        maxWidth: 400,
        backgroundColor: isSelected ? "lightblue" : "white",
        cursor: isSelected ? "default" : "pointer",
        opacity: disabled ? 0.5 : 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        pointerEvents: disabled ? "none" : "auto",
        border: 0.5
      }

    return (
        <div>
                <Card sx={{...cardStyle, height: 100 }}>
                    <CardActionArea sx={{ height: "100%" }} onClick={() => handleClick()}>
                        <CardHeader>{material.name}</CardHeader>
                        <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center"  }}>
                            <Typography variant="body2" color="text.secondary">
                                {material.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
        </div>
    )
}

export default MaterialCard