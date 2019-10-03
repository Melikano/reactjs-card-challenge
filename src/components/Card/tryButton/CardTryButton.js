import React from "react";
import { connect } from "react-redux";
import { changeCard } from "../../../redux/actions/index";
import "./CardTryButton.css";

const CardTryButton = ({ changeCard, theme }) => {
  return (
    <button className={`try-button ${theme.color}`} onClick={() => changeCard()}>
      Try !
    </button>
  );
};
const mapDispatchToProps = dispatch => ({
  changeCard: () => dispatch(changeCard())
});
const mapStateToProps = state => ({
  theme: state.currentTheme
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardTryButton);
