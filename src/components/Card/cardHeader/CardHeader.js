import React from "react";
import { connect } from "react-redux";
import SaveButton from "../saveButton/SaveButton";
import EditButton from "../editButton/EditButton";
import "./CardHeader.css";

const CardHeader = ({ headerTitle, theme, editable }) => {
  let RightButton = editable ? SaveButton : EditButton;
  return (
    <header className={`card-header ${theme}`}>
      <div>
        <h5 className='header-title'>{headerTitle}</h5>
      </div>
      <RightButton />
    </header>
  );
};
const mapStateToProps = state => ({
  theme: state.currentTheme,
  editable: state.editable
});
export default connect(
  mapStateToProps,
  null
)(CardHeader);
