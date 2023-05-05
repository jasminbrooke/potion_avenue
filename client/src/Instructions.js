import React from "react"
import { Container } from "@mui/material/";
import gameplaygif from "./assets/gameplaygif.gif"

const Instructions = () => {
    

return (
    <Container id="start-game">
        <ul class="custom-bullet">
        <h1>Instructions</h1>
    <li>Press "Start Game" button to begin the game.</li>
    <li>Select a customer card that appears on the screen.</li>
    <li>Select an empty bottle to start the order.</li>
    <li>Pick the correct materials for the potion, listed at the bottom of the customer's card.</li>
    <li>Once you have selected three materials, hit "Mix".</li>
    <li>Once the potion bottle appears, press "Brew" to start the brewing process.</li>
    <li>While the potion is brewing, attend to other customers.</li>
    <li>Watch for the potion to finish and click on it to serve it to the right customer.</li>
    <li>If the order is correct, you get 10 points. If not, you will hear about it!</li>
    <li>If a customer leaves before you can serve them, you lose potential points.</li>
    <li>Play until you run out of customers.</li>
    <li>See your score at the end of the game.</li>
    <li>Happy brewing! </li>
    <img alt="gameplaygif" src={gameplaygif}></img>

        </ul>
        </Container>
)
}

export default Instructions;