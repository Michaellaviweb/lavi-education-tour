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
        <div className="row">
          <img src={this.props.icon} />
        </div>
        <div className="row">
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default Benefit;
