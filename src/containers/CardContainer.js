import React from "react";
import { getCards } from "../redux/actions";
import { connect } from "react-redux";
import WrappedCard from "../components/Card/cardStructure/Card";
class CardContainer extends React.Component {
  componentDidMount() {
    this.props.getCards();
  }

  render() {
    const { cards, loading, currentCard, error } = this.props;
    console.log(error);
    return loading ? (
      <p>loading...!</p>
    ) : error ? (
      <p>an error</p>
    ) : (
      <WrappedCard card={cards[currentCard]} />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getCards: () => dispatch(getCards())
});

const mapStateToProps = state => ({
  cards: state.cards.data,
  loading: state.cards.loading,
  error: state.cards.error,
  currentCard: state.currentCard
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardContainer);
