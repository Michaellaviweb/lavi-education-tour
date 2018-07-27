import React from 'react';
import { withRouter } from 'react-router';
import MainSolutionTitle from './MainSolutionTitle';
import Benefit from './Benefit';
import Paragraph from './Paragraph';
import './../styles/css/IndividualContentWrapper.css';


class IndividualContentWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className='IndividualContentWrapper'>
        <div className="solution-image">
          <img src={this.props.currentSolution.homeImage} />
        </div>
        <div className="banner-image">
          <img src={this.props.currentSolution.bannerImage} />
        </div>

        <div className="solution-content-container">
          <div className="solution-content">

            <div className="solution-title">
              <MainSolutionTitle title={this.props.currentSolution.title} />
            </div>

            {/* Map paragraphs for single solution and return Paragraph components */}
            {this.props.currentSolution.content.paragraphs !== undefined &&
             this.props.currentSolution.content.paragraphs.map((paragraph, index) => {
              return <div key={index} className='paragraph'>
                        <Paragraph text={paragraph} />
                      </div>
            })}

            <div className="content-images">
              {/* Map paragraphs for single solution and return <imgs> wrapped in <divs> */}
              {this.props.currentSolution.content.images !== undefined &&
               this.props.currentSolution.content.images.map((image, index) => {
                return <div key={index} className='content-image'>
                          <img src={image.path} />
                        </div>
              })}
            </div>
          </div>

          <div className="sidebar">
            <div className="key-benefits">
              <div className="key-benefits-title">Key Benefits</div>
              {this.props.currentSolution.content.keyBenefits !== undefined &&
               this.props.currentSolution.content.keyBenefits.map((item, index) => {
                return <div key={index} className='paragraph'>
                          <Benefit text={item.text} icon={item.icon} />
                        </div>
              })}
            </div>

            <div className="solution-navigation">
              <a href={this.props.previousSolution()}>Previous Solution</a>
              <a href={this.props.nextSolution()}>Next Solution</a>
            </div>
          </div>

        </div>
      </div>
    );
  }

}

export default withRouter(IndividualContentWrapper);
