import React from "react";
const animationCardCreator = Card => {
  return class animationCard extends React.Component {
    render() {
      return <Card {...this.props} />;
    }
  };
};

export default animationCardCreator;
