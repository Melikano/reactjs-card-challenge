import axios from "axios";
import actionTypes from "./actionTypes";
import urls from "../../utils/urls";
import getTheme from "../../utils/themes";

let cardId = 0;
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
      dispatch(
        setCards(response.data.cards.map(item => ({ ...item, id: cardId++ })))
      );
      dispatch(changeCard());
    })
    .catch(error => {
      dispatch(failedCards(error));
    });
};
export const changeCard = () => (dispatch, getState) => {
  const { cards } = getState();
  let random = Math.floor(Math.random() * cards.data.length);
  dispatch(setCurrentCard(cards.data[random]));
  dispatch(setCurrentTheme(getTheme(cards.data[random].tag)));
  dispatch(stopEditWithoutSave());
};
export const setCurrentCard = card => ({
  type: actionTypes.SET_CURRENT_CARD,
  card
});
export const setCurrentTheme = theme => ({
  type: actionTypes.SET_CURRENT_THEME,
  theme
});

export const startEdit = () => ({
  type: actionTypes.START_EDIT
});

export const stopEditWithoutSave = () => ({
  type: actionTypes.STOP_EDIT
});

export const editTitle = newTitle => ({
  type: actionTypes.EDIT_TITLE,
  newTitle
});

export const editDescription = newDescription => ({
  type: actionTypes.EDIT_DESCRIPTION,
  newDescription
});

export const saveChanges = () => (dispatch, getState) => {
  const { currentCard } = getState();
  dispatch(saveCard(currentCard));
};

export const saveCard = card => ({
  type: actionTypes.SAVE_CARD,
  card
});
