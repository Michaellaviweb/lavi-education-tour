import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { solutions } from './data/data.js';
import Solution from './Components/Solution.js';
import SolutionNavBarWrapper from './Components/SolutionNavBarWrapper.js';
import './styles/css/globals/beauter.css';

class Home extends Component {
  constructor(props) {
    super(props); 
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
  } 
  componentDidMount(){
      
  }
  
  render() {
    return (   
        <div className={`App`}>
            hello
        </div>
    );
  }
}

export default Home;
