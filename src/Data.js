import React, { Component } from 'react';
import data from './data/data.js';

class Data extends Component {

	render(){
		var arr=[];
		Object.keys(data).forEach(function(key){
			arr.push(data[key]);
		});
		return <ul>{arr.map(item => <DataChild key={item.label} label={item.title} />)}</ul>;
	}

}

class DataChild extends React.Component {
  render() {
    return <li>{this.props.label}</li>;
  }
}

export {
	Data, 
	DataChild
};