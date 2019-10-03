import { combineReducers } from "redux";
import cardsReducer from "./cardsReducer";
import currentCardReducer from "./currentCardReducer";
import currentThemeReducer from "./currentThemeReducer";
import editCardReducer from "./editCardReducer";
export default combineReducers({
  cards: cardsReducer,
  currentCard: currentCardReducer,
  currentTheme: currentThemeReducer,
  editable: editCardReducer
});
