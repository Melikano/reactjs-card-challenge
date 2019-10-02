import React from "react";
const CardBody = ({ title, description, content }) => {
  console.log(title);
  return (
    <main>
      <h1>{title}</h1>
      <p>{description}</p>
      {content}
    </main>
  );
};

export default CardBody;
