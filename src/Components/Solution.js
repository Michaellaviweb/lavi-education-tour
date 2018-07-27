import React from 'react';
import IndividualContentWrapper from './IndividualContentWrapper.js';
import './../styles/css/Solution.css';

class Solution extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let style = {
      overflowX: 'scroll',
      overflowY: 'hidden',
      WebkitOverflowScrolling : 'touch'
    }

    return (
      <div className="Solution">
        <IndividualContentWrapper
          currentSolution={this.props.currentSolution}
          previousSolution={this.props.previousSolution}
          nextSolution={this.props.nextSolution}
        />
      </div>
    );
  }
}

export default Solution;
