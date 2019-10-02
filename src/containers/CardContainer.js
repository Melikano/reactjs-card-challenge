import React from "react";
import { getCards } from "../redux/actions";
import { connect } from "react-redux";
import cardCreator from "../components/Card/cardCreator";
import Card from "../components/Card/Card";
import pictureCardCreator from "../components/Card/pictureCardCreator";
class CardContainer extends React.Component {
  componentDidMount() {
    this.props.getCards();
  }

  render() {
    const { cards, loading } = this.props;
    console.log(loading);
    if (cards) {
      console.log(cards[1]);
    }
    return loading ? (
      <p>loading...</p>
    ) : (
      <Card card={cards[1]} />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getCards: () => dispatch(getCards())
});

const mapStateToProps = state => ({
  cards: state.cards.data,
  loading: state.cards.loading
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardContainer);
