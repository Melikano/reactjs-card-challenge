import { connect } from "react-redux";
import EditableText from "../components/editableText/EditableText";
import { editDescription } from "../redux/actions";

const mapDispatchToProps = dispacth => ({
  editValue: newDescription => dispacth(editDescription(newDescription))
});

const mapStateToProps = (state, ownProps) => ({
  value: state.currentCard.description,
  editable: state.editable,
  style: ownProps.style
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditableText);
