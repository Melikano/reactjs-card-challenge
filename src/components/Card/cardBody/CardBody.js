import React from "react";
import './CardBody.css'

const CardBody = ({ title, description, content }) => {
  console.log(title);
  return (
    <main className="card-body">
      <h1>{title}</h1>
      <p>{description}</p>
      {content}
    </main>
  );
};

export default CardBody;
