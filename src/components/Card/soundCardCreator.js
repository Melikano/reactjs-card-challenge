import React from "react";
const soundCardCreator = Card => {
  return class SoundCard extends React.Component {
    render() {
      return <Card {...this.props} />;
    }
  };
};

export default soundCardCreator;
