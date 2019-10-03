import React from "react";
import { getCards } from "../redux/actions";
import { connect } from "react-redux";
import WrappedCard from "../components/Card/cardStructure/Card";
class CardContainer extends React.Component {
  componentDidMount() {
    this.props.getCards();
  }

  render() {
    const { loading, currentCard, error } = this.props;
    return loading ? (
      <p>loading...!</p>
    ) : (
      <WrappedCard card={currentCard} />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getCards: () => dispatch(getCards())
});

const mapStateToProps = state => ({
  loading: state.cards.loading,
  error: state.cards.error,
  currentCard: state.currentCard
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardContainer);
