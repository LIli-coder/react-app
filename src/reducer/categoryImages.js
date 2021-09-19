const initialState = {
  activeCategory:null,
  images:{

  }
}; 

const TYPES = {
  CHANGE_ACTIVE_CATEGORY:'CHANGE_ACTIVE_CATEGORY',
  SET_ACTIVE_CATEGORY_IMAGES:'SET_ACTIVE_CATEGORY_IMAGES'
}

const changeActiveCategory = payload => ({
  type:TYPES.CHANGE_ACTIVE_CATEGORY,
  payload
});

const setActiveCategoryImages = payload => ({
  type:TYPES.SET_ACTIVE_CATEGORY_IMAGES,
  payload
});
  
  // Use the initialState as a default value
export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case TYPES.SET_ACTIVE_CATEGORY_IMAGES:
          const images = state.images;
          const payload = action.payload;
          images[payload.category] = payload.images;
          return {
            activeCategory:payload.category,
            images
          }
        case TYPES.CHANGE_ACTIVE_CATEGORY:
          return {
            ...state,
            activeCategory:action.payload
          }
        // Do something here based on the different types of actions
        default:
        // If this reducer doesn't recognize the action type, or doesn't
        // care about this specific action, return the existing state unchanged
        return state
    }
}

export {
  changeActiveCategory,
  setActiveCategoryImages
}