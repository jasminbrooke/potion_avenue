import React from "react"
import { Container } from "@mui/material/";
import gameplaygif from "./assets/gameplaygif.gif"

const Instructions = () => {

    return (
        <Container>
            <h1>Instructions</h1>
            <ul className="custom-bullet">
                <li>Select a customer card.</li>
                <li>Select any empty bottle.</li>
                <li>Select the correct materials, then select the mixing bowl.</li> 
                <li>Select the bottle again to start the brewing process. Meanwhile, attend to other customers</li>
                <li>When it's ready, click on it to serve.</li>
                <li>If the order is correct, you get 10 points. If not, you will hear about it!</li>
                <li>Play until you run out of customers.</li>
                <li>Happy brewing! </li>
            </ul>
            <h2> Example: </h2>
            <img alt="gameplaygif" src={gameplaygif}></img>
        </Container>
    )
}

export default Instructions;