import actionTypes from "../actions/actionTypes";
const cardsReducer = (state = { data: [], loading: true }, action) => {
  switch (action.type) {
    case actionTypes.LOADING_CARDS:
      return { loading: true };
    case actionTypes.SUCCESS_GETTING_CARDS:
      return { data: action.cards, loading: false };
    case actionTypes.FAILED_GETTING_CARDS:
      return { error: action.error, loading: false };
    default:
      return state;
  }
};

export default cardsReducer;
