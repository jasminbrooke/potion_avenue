const initialState = {
  materials: null,
};

const MaterialReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MATERIALS":
      return { materials: action.payload };
    default:
      return state;
  }
};

export default MaterialReducer;