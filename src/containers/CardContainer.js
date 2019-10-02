import React from "react";
import { getCards } from "../redux/actions";
import { connect } from "react-redux";
class CardContainer extends React.Component {
  componentDidMount() {
    this.props.getCards();
  }

  render() {
    const {cards} = this.props;
    console.log(cards);
    let currentCard = 1;
    let show = cards.loading;
    console.log(show);
    return <div>{show}</div>;
  }
}

const mapDispatchToProps = dispatch => ({
  getCards: () => dispatch(getCards())
});

const mapStateToProps = state => ({
  cards: state.cards
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardContainer);
