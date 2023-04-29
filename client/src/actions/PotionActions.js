export const setPotions = ( potions ) => {
    return {
        type: "GET_POTIONS", 
        payload: potions
    }
}

export const removePotion = ( potion ) => {
    return {
        type: "DESTROY_POTION",
        payload: potion
    }
}

export const createPotion = ( potion ) => {
    return {
        type: "CREATE_POTION",
        payload: potion
    }
}