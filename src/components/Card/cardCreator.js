import React from "react";
import pictureCardCreator from "./pictureCardCreator";
import animationCardCreator from "./animationCardCreator";
import soundCardCreator from "./soundCardCreator";
const cardCreator = (cardCode, Card) => {
  switch (cardCode) {
    case 0:
      return pictureCardCreator(Card);
    case 1:
      return animationCardCreator(Card);
    case 2:
      return soundCardCreator(Card);
    default:
      return Card;
  }
};

export default cardCreator;
