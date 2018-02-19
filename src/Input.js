import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
  constructor(props) {
  	super(props);
  }

  render() {
  	return (
  	  <div className='input'>
  	  	{this.props.input}
  	  </div>
  	);
  }
}

export default Input;