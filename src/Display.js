import React, { Component } from 'react';
import Formula from './Formula';
import Input from './Input';
import './Display.css'

class Display extends Component {
  constructor(props) {
  	super(props);
  }

  render() {
  	return (
  	  <div className='display'>
  	  	<Formula expression={this.props.expression} />
  	  	<Input input={this.props.input} />
  	  </div>
  	);
  }
}

export default Display;