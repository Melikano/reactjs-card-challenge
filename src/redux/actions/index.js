import axios from "axios";
import actionTypes from "./actionTypes";
import urls from "../../utils/urls";

export const loadingCards = () => ({
  type: actionTypes.LOADING_CARDS
});
export const setCards = cards => ({
  type: actionTypes.SUCCESS_GETTING_CARDS,
  cards
});
export const failedCards = error => ({
  type: actionTypes.FAILED_GETTING_CARDS,
  error
});
export const getCards = () => dispatch => {
  dispatch(loadingCards());
  axios
    .get(urls.CARD_URL)
    .then(response => {
      dispatch(setCards(response.data.cards));
      dispatch(changeCard());
    })
    .catch(error => {
      dispatch(failedCards(error));
    });
};
export const changeCard = () => (dispatch, getState) => {
  const { cards } = getState();
  let random = Math.floor(Math.random() * cards.data.length);
  console.log("rand=" + random);
  dispatch(setCurrentCard(random));
  dispatch(setCurrentTheme(cards.data[random].tag));
};
export const setCurrentCard = cardNumber => ({
  type: actionTypes.SET_CURRENT_CARD,
  cardNumber
});
export const setCurrentTheme = theme => ({
  type: actionTypes.SET_CURRENT_THEME,
  theme
});
