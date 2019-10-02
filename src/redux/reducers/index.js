import { combineReducers } from "redux";
import cardsReducer from "./cardsReducer";
import currentCardReducer from "./currentCardReducer";
import currentThemeReducer from "./currentThemeReducer";
export default combineReducers({
  cards: cardsReducer,
  currentCard: currentCardReducer,
  currentTheme: currentThemeReducer
});
