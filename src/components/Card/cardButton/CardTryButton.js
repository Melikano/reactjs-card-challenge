import React from "react";
import { connect } from "react-redux";
import { changeCard } from "../../../redux/actions/index";
import "./CardTryButton.css";

const CardTryButton = ({ changeCard }) => {
  return (
    <button className='try-button' onClick={() => changeCard()}>
      Try !
    </button>
  );
};
const mapDispatchToProps = dispatch => ({
  changeCard: () => dispatch(changeCard())
});
export default connect(
  null,
  mapDispatchToProps
)(CardTryButton);
