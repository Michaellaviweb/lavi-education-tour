import React from 'react';
import { withRouter } from 'react-router';

import MainImage from './MainImage';
import SolutionNavBar from './SolutionNavBar';
import './../styles/css/SolutionNavBarWrapper.css';

class SolutionNavBarWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.scrollRef = React.createRef();
  }

  scroll(direction){
    /*
    let distance = 0;
    if(direction === 'left'){
      distance = 250;
    }
    else{
      distance = -250;
    }
    this.scrollRef.current.style.transform = "translateX("+distance+"px)";
    this.scrollRef.current.scrollLeft += distance;
    //this.scrollRef.current.style.transform = "none";
    
    console.log(this.scrollRef.current.scrollLeft);
    */
  }
  
  render() {
    // You can destructure props like this.
    let { isDetailPage,
          mobileView,
          allSolutions,
          currentSolution,
          changeClassNameToShow,
          changeClassNameToHide,
          handleChangeOnClick,
          toggleDivClassName
        } = this.props;

    // @TODO get length of solutions.
    let smallImage = 250;
    let smallestImage = 150;
    let numberSolutions = allSolutions.length;
    let width = ((numberSolutions/2 * smallImage) + 745); // The padding is from the image + the border widths (probably)
    if (isDetailPage) {
      width = ((numberSolutions * smallestImage) + 275);
    }
    if (mobileView){
      width = width - 100;
    }

    return (
      <div className={`SolutionNavBarWrapper carousel ${isDetailPage ? 'single-row' : 'double-row'}`}>
        <a className="carousel-button button-left" onClick={() => this.scroll("left")}> / </a>
        <div className="wrapper">
          <div className="scroll-arrow">a</div>
          <div className="scroll" style={{width:width+'px'}} id='scroll' ref={this.scrollRef}>
            {!isDetailPage &&
                <div className="bigImage">
                  <MainImage
                    img={currentSolution.thumbImage}
                    changeClassNameToShow={changeClassNameToShow}
                    handleChangeOnClick={handleChangeOnClick}
                  />
                </div>
            }
            <div className="smallImages">
              <SolutionNavBar
                isDetailPage={isDetailPage}
                allSolutions={allSolutions}
                changeClassNameToHide={changeClassNameToHide}
                handleChangeOnClick={handleChangeOnClick}
                toggleDivClassName={toggleDivClassName}
              />
            </div>
          </div>
        </div>
        <a className="carousel-button button-right" onClick={() => this.scroll("right")}> \ </a>
      </div>
    );
  }
}

export default withRouter(SolutionNavBarWrapper);
