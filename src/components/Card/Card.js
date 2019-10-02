import React from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import cardCreator from "./cardCreator";

const Card = ({ card }) => {
  return (
    <div>
      <CardHeader />
      <CardBody title={card.title} description={card.description} />
      <CardFooter />
    </div>
  );
};

export default cardCreator(({ card }) => card.code, Card);
