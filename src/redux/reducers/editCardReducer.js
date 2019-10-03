import actionTypes from "../actions/actionTypes";
const editCardReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.START_EDIT:
      return true;
    case actionTypes.SAVE_CARD:
      return false;
    case actionTypes.STOP_EDIT:
      return false;
    default:
      return state;
  }
};

export default editCardReducer;
