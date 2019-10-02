import React from "react";
const pictureCardCreator = Card => {
  return class PictureCard extends React.Component {
    render() {
      return <Card {...this.props} />;
    }
  };
};

export default pictureCardCreator;
