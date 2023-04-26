const initialState = {
    materials: [],
};
  
  const materialReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_MATERIAL":
        const materials = [...state.materials, action.payload];
        return { ...state, materials };
      case "REMOVE_MATERIAL":
        const newMaterials = state.materials.filter(material => material.id !== action.payload.id);
        return { ...state, materials: newMaterials };
      default:
        return state;
    }
  };

  export default materialReducer;