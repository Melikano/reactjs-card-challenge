import { connect } from "react-redux";
import EditableText from "../components/Card/editableText/EditableText";
import { editDescription } from "../redux/actions";

const mapDispatchToProps = dispacth => ({
  editValue: (newDescription) => dispacth(editDescription(newDescription))
});

const mapStateToProps = state => ({
  value: state.currentCard.description,
  editable: state.editable
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditableText);
