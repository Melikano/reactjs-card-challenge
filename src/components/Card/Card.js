import React from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import cardCreator from "../../containers/cardCreator";

const Card = ({ card, content }) => {
  console.log(content);
  return (
    <div>
      <CardHeader />
      <CardBody
        title={card.title}
        description={card.description}
        content={content}
      />
      <CardFooter />
    </div>
  );
};

const WrappedCard = cardCreator(Card);
export default WrappedCard;
