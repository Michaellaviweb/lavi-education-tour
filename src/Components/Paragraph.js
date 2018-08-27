import React from 'react';

class Paragraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: this.props.text}}>
      </div>
    );
  }
}

export default Paragraph;