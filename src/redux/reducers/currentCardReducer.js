import actionTypes from "../actions/actionTypes";
const currentCardReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_CARD:
      return action.card;
    case actionTypes.EDIT_TITLE:
      return { ...state, title: action.newTitle };
    case actionTypes.EDIT_DESCRIPTION:
      return { ...state, description: action.newDescription };
    default:
      return state;
  }
};

export default currentCardReducer;
