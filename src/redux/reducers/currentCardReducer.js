import actionTypes from "../actions/actionTypes";
const currentCardReducer = (state = 0, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_CARD:
      return action.cardNumber
    default:
      return state;
  }
};

export default currentCardReducer;
