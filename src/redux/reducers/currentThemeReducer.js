import actionTypes from "../actions/actionTypes";
const currentThemeReducer = (state = "", action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_THEME:
      return action.theme;
    default:
      return state;
  }
};

export default currentThemeReducer;
