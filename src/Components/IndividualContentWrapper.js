import React from 'react';
import { withRouter } from 'react-router';
import MainSolutionTitle from './MainSolutionTitle';
import Benefit from './Benefit';
import Paragraph from './Paragraph';
import Form from './Form';
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
        {/*
        <div className="banner-image jumbo">
          <img src={this.props.currentSolution.bannerImage} />
        </div>
        */}
        <div className="solution-content-container row">
          <div className="solution-content col m8" style={{padding:'1em'}}>
            <div className="solution-title">
              <MainSolutionTitle title={this.props.currentSolution.title} />
            </div>
            <br/>

            {/* Map paragraphs for single solution and return Paragraph components 
            {this.props.currentSolution.content.paragraphs !== undefined &&
             this.props.currentSolution.content.paragraphs.map((paragraph, index) => {
              return <div key={index} className='paragraph'>
                        <Paragraph text={paragraph} />
                      </div>
            })}
            */}

            {
              this.props.currentSolution.content.layout.map((item, index) => {
                switch(item.key){
                  case 1:
                  return (
                    <Paragraph key={index} text={item.value} />                    
                  )
                  case 2: 
                  return (
                    <div key={index} className={(item.span === 1) ? 'detail-image' : ''}>
                          <img src={item.url} />
                          <i className="img_text">{item.caption}</i>
                    </div> 
                  )
                  case 3: 
                  return (
                    <p key={index}>
                      {item.icon} <a href="#"> {item.text}</a>
                    </p>
                  )
                  case 4:
                  return (
                    <p key={index}>
                      <b>{item.prefix} </b><a href={item.url}> {item.text}</a>
                    </p>  
                  )
                  default:
                  return null;
                }
                
              })
            }
            </div>
            {/*
            
            
            {this.props.currentSolution.content.paragraphs[0] !== undefined &&
              <div key={0} className="paragraph">
                <Paragraph text={this.props.currentSolution.content.paragraphs[0]} />
              </div>
            }

            <div className="content-images row">
              {this.props.currentSolution.content.images !== undefined &&
               this.props.currentSolution.content.images.map((image, index) => {                 
                return (
                  <div key={index} className='content-image'>
                          <img src={image.path} />
                          <i className="img_text">{image.text}</i>
                  </div>  
                );             
                                
              })}
            </div>
            {this.props.currentSolution.content.paragraphs[1] !== undefined &&
              <div key={1} className="paragraph">
                <Paragraph text={this.props.currentSolution.content.paragraphs[1]} />
              </div>
            }
            </div>
          </div>
        */}
          <div className="sidebar col m4">          
            <div className="key-benefits">
              <div className="key-benefits-title">{this.props.currentSolution.content.slideBar.title}</div>
              {this.props.currentSolution.content.slideBar.keyPoints !== undefined &&
               this.props.currentSolution.content.slideBar.keyPoints.map((item, index) => {
                return (                  
                    <div key={index} className='paragraph'>
                      <Benefit text={item.caption} icon={item.icon} />
                    </div>       
                )
              })}
            </div>
            <br/>
              <div className="guide">
                <img src={this.props.currentSolution.content.slideBar.guide.img} href={this.props.currentSolution.content.slideBar.guide.link} />
                <p style={{textAlign: 'center'}}>{this.props.currentSolution.content.slideBar.guide.caption}</p>
              </div>  
            <div className="solution-navigation">
              <a href={this.props.previousSolution()}>Previous Solution </a>
              <a href={this.props.nextSolution()}> Next Solution</a>
            </div>
            
          </div>

        </div>
        <Form key={1} formData={this.props.currentSolution.content.form} />
      </div>
    );
  }

}

export default withRouter(IndividualContentWrapper);
