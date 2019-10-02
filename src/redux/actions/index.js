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
    })
    .catch(error => {
      dispatch(failedCards(error));
    });
};
