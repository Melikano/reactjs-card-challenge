import React from "react";
const cardCreator = Card => {
  return class WrappedCard extends React.Component {
    constructor(props) {
      super(props);
      this.state = { content: "" };
    }
    componentWillReceiveProps(nextProps) {
      const { card } = nextProps;
      console.log(card.code);
      switch (card.code) {
        case 0:
          this.addImage.bind(this)(card.image);
          break;
        case 1:
          this.addAnimation.bind(this)();
          break;
        case 2:
          this.addSound.bind(this)(card.sound);
          break;
      }
    }

    addImage(iamgeUrl) {
      console.log(iamgeUrl);
      this.setState({ content: <img src={iamgeUrl} width="100%" height="80%"/> });
    }

    addSound(soundUrl) {
      let content = (
        <audio controls>
          <source src={soundUrl} type='audio/ogg' />
          <source src={soundUrl} type='audio/mpeg' />
          Your browser does not support the audio element.
        </audio>
      );

      this.setState({ content });
    }

    addAnimation() {
      this.setState({content: "an animation"});
    }

    render() {
      return <Card content={this.state.content} {...this.props} />;
    }
  };
};

export default cardCreator;