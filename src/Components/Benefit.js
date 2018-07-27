import React from 'react';
import './../styles/css/Benefit.css';
class Benefit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="Benefit">
        <img src={this.props.icon} />
        {this.props.text}
      </div>
    );
  }
}

export default Benefit;
