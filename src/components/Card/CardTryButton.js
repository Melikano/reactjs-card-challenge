import React from "react";

const CardTryButton = ({ onClick }) => {
  return (
    <button className='try-button' onClick={onClick}>
      Try !
    </button>
  );
};

export default CardTryButton;
