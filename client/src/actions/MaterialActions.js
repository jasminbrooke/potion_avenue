export const setMaterials = ( materials ) => {
    return {
        type: "GET_MATERIALS", 
        payload: materials
    }
}