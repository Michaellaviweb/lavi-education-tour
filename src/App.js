import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { solutions } from './data/data.js';
import Solution from './Components/Solution.js';
import SolutionNavBarWrapper from './Components/SolutionNavBarWrapper.js';
import './styles/css/App.css';
import './styles/css/globals/beauter.css';

class App extends Component {
  constructor(props) {
    super(props);
    let isDetailPage = true;
    this.state = {
      currentSolution: {
        headerText: '',
        thumbImage: '',
        categoryDescription: {
          paragraphs: [],
          images: [],
          form: {}
        }
      },
      solutions: solutions[0],
      content: solutions[0].content,
      isDetailPage: false,
      filter: "",
      mobileView: false
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.changeClassNameToShow = this.changeClassNameToShow.bind(this);
    this.changeClassNameToHide = this.changeClassNameToHide.bind(this);
    this.handleChangeOnClick = this.handleChangeOnClick.bind(this);
    this.goToLandingPage = this.goToLandingPage.bind(this);
    this.setDetailPage = this.setDetailPage.bind(this);
    this.previousSolution = this.previousSolution.bind(this);
    this.nextSolution = this.nextSolution.bind(this);
    this.getUrlForID = this.getUrlForID.bind(this);
    //this.render = this.render.bind(this);
  }
  componentDidMount() {
    let isDetailPage = false;
    let currentSolution;
    let filter = '';
    let location = window.location.pathname;
    let content = this.state.content;
    console.log(location);

    if (typeof window === 'object') {
      //if (window.location.pathname === '/'+filter) {
      currentSolution = this.state.solutions.categories.filter(catagory => {
        return '/'+catagory.url === location
      })[0];
      
      if(currentSolution === undefined){
        
        isDetailPage = true;
        currentSolution = this.state.solutions.content.filter(content => {
          //return content.categories.includes()
          return '/'+content.url === location
        })[0];
        filter = currentSolution.categories[0];
      }
      else{
        isDetailPage = false;
        filter = currentSolution.title;
        content = this.state.solutions.content.filter(content => {
          return content.categories.includes(filter)
        });
        console.log(content);
      }
      console.log(currentSolution);
        
      /*} else {
        isDetailPage = true;
        currentSolution = this.state.solutions.content.filter(content => {
          return content.categories.includes(filter)
        }).filter((content, index) => {
          return '/'+content.url === window.location.pathname
        })[0];
        //console.log('cs', currentSolution);
      }*/
    }
    let items = Object.assign({}, this.state);
    items.isDetailPage = isDetailPage;
    items.currentSolution = currentSolution;
    items.location = location;
    items.filter = filter;
    items.content = content;
    items.mobileView = window.innerWidth < 600;
    this.setState(items);
  }

  changeClassNameToShow() {
    let classesToToggle = document.getElementsByClassName('hide');
    while (classesToToggle.length) {
      classesToToggle[0].className = 'show';
    }
  }

  changeClassNameToHide() {
    let classesToToggle = document.getElementsByClassName('show');
    while (classesToToggle.length) {
      classesToToggle[0].className = 'hide';
    }
  }

  handleChangeOnClick(id) {
    console.log('test ' + id);
    let isDetailPage = false;
    if (solutions[0].content[id] === undefined) {
      isDetailPage = false;
    } else {
      isDetailPage = true;
    }
    let items = Object.assign({}, this.state);
    items.currentSolution = solutions[0].content[id];
    items.isDetailPage = isDetailPage;
    this.setState(items);
  }

  getUrlForID(id) {
    console.log('url', id);
    if (solutions[0].content[id] === undefined) {
      return '/';
    } else {
      console.log(solutions[0].content[id].url);
      return solutions[0].content[id].url;
    }
  }

  goToLandingPage(filter) {
    //console.log(filter);  
    this.setState({filter: filter});
    window.location.pathname = filter.toLowerCase();
    let items = Object.assign({}, this.state);
    items.currentSolution = undefined;
    items.isDetailPage = false;
    this.setState(items);
  }

  setDetailPage() {
    let items = Object.assign({}, this.state);
    items.isDetailPage = true;
    this.setState(items);
  }

  previousSolution() {
    console.log(this.state.currentSolution);
    if (this.state.currentSolution !== undefined) {
      let id = Number(this.state.currentSolution.id);
      if (id >= 0) {
        return this.getUrlForID(id - 1);
      } else {
        return this.getUrlForID(0);
      }
    }
    return '/';
  }

  nextSolution() {
    console.log('ns', this.state.currentSolution);
    if (this.state.currentSolution !== undefined) {
      let id = Number(this.state.currentSolution.id);
      console.log('nsid', id);
      if (id <= solutions[0].content.length) {
        return this.getUrlForID(id + 1);
      } else {
        return this.getUrlForID(0);
      }
    }
    return '/';
  }

  render() {
    let filter = this.state.filter;
    let isDetailPage = this.state.isDetailPage;
    //console.log(filter);
    return (
      <div className={`App ${isDetailPage ? 'detail-page' : 'landing-page'} `}>
        {!isDetailPage &&
          <div className="landing-page-header container">
            <div className="show page-title">
              {this.state.currentSolution.title}
            </div>
            <div className="">
              {this.state.currentSolution.headerText}
            </div>
            <div className="show page-description">
            <div dangerouslySetInnerHTML={{ __html: this.state.currentSolution.categoryDescription.paragraphs[0]}} />             
            </div>
          </div>
        }

        <div className="nav-bar jumbo">
          <SolutionNavBarWrapper 
            mobileView={this.state.mobileView}           
            allSolutions={this.state.content}
            currentSolution={this.state.currentSolution}
            changeClassNameToShow={this.changeClassNameToShow}
            changeClassNameToHide={this.changeClassNameToHide}
            handleChangeOnClick={this.handleChangeOnClick}
            isDetailPage={this.state.isDetailPage}
          />
        </div>

        {isDetailPage &&
          <div className="breadcrumb jumbo">
            Tour Homepage > <a onClick={() => this.goToLandingPage(filter) }>{filter}</a> > {this.state.currentSolution.url}
          </div>
        }

        {!isDetailPage &&
          <div className="landing-page-content container">
            <div dangerouslySetInnerHTML={{ __html: this.state.currentSolution.categoryDescription.paragraphs[1]}} />
          </div>
        }

        {/* Mapping each content.url to a React-Router route */}
        {isDetailPage &&
            <Switch>
              {this.state.solutions.content.filter(content => {
                return content.categories.includes(filter)
                //return '/'+content.url === this.state.location
              }).map((content, index) => {
                return <Route
                          key={index}
                          exact path={`/${content.url}`}
                          render={(props) => <Solution
                            {...props}
                            currentSolution={content}
                            previousSolution={this.previousSolution}
                            nextSolution={this.nextSolution}
                          />}
                        />
              })}

              {/* {this.state.solutions.categories.filter(category => {
                category.title == filter;
              }).map(category => {
                return <Route
                          exact path={`/${category.title}`}
                          render={(props) => <Solution {...props}  />}
                        />
              })} */}
              {/* <Route exact path="/" component={Home} /> */}
              {/* <Route path='/' component={App} /> */}
            </Switch>
        }
      </div>
    );
  }
}

export default App;
