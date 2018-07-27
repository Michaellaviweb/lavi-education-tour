import React from 'react';
import { withRouter } from 'react-router-dom';

class MainImage extends React.Component {
  constructor(props) {
    super(props);
    this.handleMainImageClick = this.handleMainImageClick.bind(this);
  }

  handleMainImageClick() {
    this.props.changeClassNameToShow();
    this.props.history.push('/');
    this.props.handleChangeOnClick();
  }

  render() {
    return(
      <div>
        <img
          src={this.props.img}
          onClick={() => this.handleMainImageClick()}
        />
      </div>
    );
  }
}

export default withRouter(MainImage);
