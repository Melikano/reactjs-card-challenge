import React from "react";
import { connect } from "react-redux";
import { startEdit } from "../../redux/actions";

const EditButton = ({ edit, style }) => {
  return (
    <button onClick={() => edit()} className={style}>
      <i class='fas fa-edit'></i>
    </button>
  );
};
const mapDispatchToProps = dispacth => ({
  edit: () => dispacth(startEdit())
});
export default connect(
  null,
  mapDispatchToProps
)(EditButton);
