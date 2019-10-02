import React from "react";
import { connect } from "react-redux";
import "./CardHeader.css";

const CardHeader = ({ theme }) => {
  return (
    <header className={`card-header ${theme}`}>
      <p>{theme}</p>
    </header>
  );
};
const mapStateToProps = state => ({
  theme: state.currentTheme
});
export default connect(
  mapStateToProps,
  null
)(CardHeader);
