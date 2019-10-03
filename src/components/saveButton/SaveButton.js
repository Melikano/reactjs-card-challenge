import React from "react";
import { connect } from "react-redux";
import { saveChanges } from "../../redux/actions";

const SaveButton = ({ save, style }) => {
  return (
    <button onClick={() => save()} className={style}>
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
