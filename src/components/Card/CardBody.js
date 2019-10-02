import React from "react";
const CardBody = ({ title, description }) => {
  console.log(title);
  return (
    <main>
      <h1>{title}</h1>
      <p>{description}</p>
    </main>
  );
};

export default CardBody;
