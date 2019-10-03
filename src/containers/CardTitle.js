import { connect } from "react-redux";
import EditableText from "../components/Card/editableText/EditableText";
import { editTitle } from "../redux/actions";

const mapDispatchToProps = dispacth => ({
  editValue: (newTitle) => dispacth(editTitle(newTitle))
});

const mapStateToProps = state => {
  console.log(state.currentCard);
  return {
    value: state.currentCard.title,
    editable: state.editable
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditableText);
