import React from 'react';
import Image from './Image.js';
import './../styles/css/SolutionNavBar.css';

class SolutionNavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.allSolutions)
    return(
      <div className="SolutionNavBar">
        {this.props.allSolutions.map(solution => {
          return <Image
            isDetailPage={this.props.isDetailPage}
            id={solution.id}
            source={(this.props.isDetailPage) ? solution.thumbImage : solution.homeImage}
            key={solution.id}
            title={solution.subTitle}
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
