import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { solutions } from './data/data.js';
import Solution from './Components/Solution.js';
import SolutionNavBarWrapper from './Components/SolutionNavBarWrapper.js';
import './styles/css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    let isDetailPage = true;
    this.state = {
      solutions: solutions[0],
      isDetailPage: false,
      filter: "Bookstore"
    }
    this.changeClassNameToShow = this.changeClassNameToShow.bind(this);
    this.changeClassNameToHide = this.changeClassNameToHide.bind(this);
    this.handleChangeOnClick = this.handleChangeOnClick.bind(this);
    this.goToLandingPage = this.goToLandingPage.bind(this);
    this.setDetailPage = this.setDetailPage.bind(this);
    this.previousSolution = this.previousSolution.bind(this);
    this.nextSolution = this.nextSolution.bind(this);
    this.getUrlForID = this.getUrlForID.bind(this);
  }
  componentDidMount() {
    let isDetailPage = false;
    let currentSolution;
    let filter = "Bookstore";

    if (typeof window === 'object') {
      if (window.location.pathname === '/') {
        isDetailPage = false;
      } else {
        isDetailPage = true;
        currentSolution = this.state.solutions.content.filter(content => {
          return content.categories.includes(filter)
        }).filter((content, index) => {
          return '/'+content.url === window.location.pathname
        })[0];
        // console.log('cs', currentSolution);
      }
    }
    let items = Object.assign({}, this.state);
    items.isDetailPage = isDetailPage;
    items.currentSolution = currentSolution;
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

  goToLandingPage() {
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
    let filter = "Bookstore";
    let isDetailPage = this.state.isDetailPage;

    return (
      <div className={`App ${isDetailPage ? 'detail-page' : 'landing-page'} `}>
        {!isDetailPage &&
          <div className="landing-page-header">
            <div className="show page-title">
              Bookstore
            </div>
            <div className="show page-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        }

        <div className="nav-bar">
          <SolutionNavBarWrapper
            allSolutions={this.state.solutions}
            changeClassNameToShow={this.changeClassNameToShow}
            changeClassNameToHide={this.changeClassNameToHide}
            handleChangeOnClick={this.handleChangeOnClick}
            isDetailPage={this.state.isDetailPage}
          />
        </div>

        {isDetailPage &&
          <div className="breadcrumb">
            Tour Homepage > <a onClick={() => this.goToLandingPage() }>{filter}</a>
          </div>
        }

        {!isDetailPage &&
          <div className="landing-page-content">
            Landing page copy: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        }

        {/* Mapping each content.url to a React-Router route */}
        {isDetailPage &&
            <Switch>
              {this.state.solutions.content.filter(content => {
                return content.categories.includes(filter)
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
