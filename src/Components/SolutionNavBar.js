import React from 'react';
import Image from './Image.js';
import './../styles/css/SolutionNavBar.css';

class SolutionNavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="SolutionNavBar">
        {this.props.allSolutions.content.map(solution => {
          return <Image
            isDetailPage={this.props.isDetailPage}
            id={solution.id}
            source={solution.thumbImage}
            key={solution.id}
            title={solution.title}
            description={solution.description}
            url={solution.url}
            handleChangeOnClick={this.props.handleChangeOnClick}
            changeClassNameToHide={this.props.changeClassNameToHide}
          />
          })}
      </div>
    );
  }
}

export default SolutionNavBar;
