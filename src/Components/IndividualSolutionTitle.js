import React from 'react';
import { withRouter } from 'react-router';

class IndividualSolutionTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
     <div>{this.props.title}</div>
    );
  }
}

export default withRouter(IndividualSolutionTitle);
