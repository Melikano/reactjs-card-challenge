import React from "react";
import { connect } from "react-redux";
import { saveChanges } from "../../../redux/actions";

const SaveButton = ({ save }) => {
  return (
    <button onClick={() => save()}>
      <i class='fas fa-save'></i>
    </button>
  );
};

const mapDispatchToProps = dispacth => ({
  save: () => dispacth(saveChanges())
});
export default connect(
  null,
  mapDispatchToProps
)(SaveButton);
