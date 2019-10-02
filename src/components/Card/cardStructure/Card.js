import React from "react";
import CardHeader from "../cardHeader/CardHeader";
import CardBody from "../cardBody/CardBody";
import cardCreator from "../../../containers/cardCreator";
import CardTryButton from "../cardButton/CardTryButton";
import './Card.css'

const Card = ({ card, content }) => {
  console.log(content);
  return (
    <div className='card-container'>
      <div class='card'>
        <CardHeader />
        <CardBody
          title={card.title}
          description={card.description}
          content={content}
        />
        <CardTryButton />
      </div>
    </div>
  );
};

const WrappedCard = cardCreator(Card);
export default WrappedCard;
