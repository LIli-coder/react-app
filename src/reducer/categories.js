const initialState = [];
const TYPES = {
  GET_CATEGOREIS:"GET_CATEGOREIS"
};
  
const getCategories = payload => ({
  type:TYPES.GET_CATEGOREIS,
  payload
})
  // Use the initialState as a default value
export default function appReducer(state = initialState, action) {
    switch (action.type) {
      case TYPES.GET_CATEGOREIS:
        return action.payload;
        default:
        // If this reducer doesn't recognize the action type, or doesn't
        // care about this specific action, return the existing state unchanged
        return state;
    }
}

export {
  getCategories
};