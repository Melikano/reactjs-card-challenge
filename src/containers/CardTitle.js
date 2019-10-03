import { connect } from "react-redux";
import EditableText from "../components/editableText/EditableText";
import { editTitle } from "../redux/actions";

const mapDispatchToProps = dispacth => ({
  editValue: newTitle => dispacth(editTitle(newTitle))
});

const mapStateToProps = (state, ownProps) => ({
  value: state.currentCard.title,
  editable: state.editable,
  style: ownProps.style
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditableText);
