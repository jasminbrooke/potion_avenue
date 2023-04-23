import React from "react"
import PotionList from "./PotionList"

const FinishPotion = ( { materials, potions } ) => {
    return (
        <div>
            <header>This is the FinishPotion</header>


            <p>
                Here you can:
            </p>
                See your FinishPotion
                <PotionList potions={potions}/>
            
        </div>
    )
}

export default FinishPotion