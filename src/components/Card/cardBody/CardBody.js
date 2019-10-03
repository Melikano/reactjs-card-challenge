import React from "react";
import CardTitle from "../../../containers/CardTitle";
import CardDescription from "../../../containers/CardDescription";
import "./CardBody.css";

const CardBody = ({ content }) => {
  return (
    <main className='card-body'>
      <CardTitle />
      <CardDescription />
      <div>{content}</div>
    </main>
  );
};

export default CardBody;
