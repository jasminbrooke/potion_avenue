const initialState = {
    potions: null,
};
  
const PotionReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_POTIONS":
            return { potions: action.payload };
        case "DESTROY_POTION":
            const updatedPotions = state.potions.filter(potion => potion.id != action.payload.id)
            return { potions: updatedPotions}
        case "CREATE_POTION":
            const updatedPotionsCreate = [...state.potions, action.payload]
            return {potions: updatedPotionsCreate}
        default:
            return state;
    }
};

export default PotionReducer;