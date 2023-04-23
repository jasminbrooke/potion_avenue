export const addMaterial = ( material ) => {
    return {
        type: "ADD_MATERIAL", 
        payload: material
    }
}

export const removeMaterial = ( material ) => {
    return {
        type: "REMOVE_MATERIAL",
        payload: material
    }
}