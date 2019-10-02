import React from "react";
import { getCards } from "../redux/actions";
import { connect } from "react-redux";
import WrappedCard from "../components/Card/Card";
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
    return loading ? <p>loading...</p> : <WrappedCard card={cards[2]} />;
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
