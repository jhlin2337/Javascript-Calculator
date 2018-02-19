import React, { Component } from 'react';
import './Formula.css';

class Formula extends Component {
  constructor(props) {
  	super(props);
  }

  render() {
  	return (
  	  <div className='formula'>
  	  	{this.props.expression}
  	  </div>
  	);
  }
}

export default Formula;