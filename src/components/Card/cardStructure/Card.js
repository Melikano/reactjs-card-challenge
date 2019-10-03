import React from "react";
import CardHeader from "../cardHeader/CardHeader";
import CardBody from "../cardBody/CardBody";
import cardCreator from "../../../containers/cardCreator";
import CardTryButton from "../tryButton/CardTryButton";
import "./Card.css";

const Card = ({ card, content }) => {
  return (
    <div className='card-container'>
      <div class='card'>
        <CardHeader headerTitle={card.tag} />
        <CardBody content={content} />
        <CardTryButton />
      </div>
    </div>
  );
};

const WrappedCard = cardCreator(Card);
export default WrappedCard;
