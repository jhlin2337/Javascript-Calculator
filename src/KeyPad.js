import React, { Component } from 'react';
import './KeyPad.css'

class KeyPad extends Component {
  constructor(props) {
  	super(props);
  }

  render() {
  	return (
  	  <div className='keypad'>
  	  	<button id="clear" 
  	  			value="AC" 
  	  			className="jumbo" 
  	  			style={{background: 'rgb(172, 57, 57)'}}
  	  			onClick={() => this.props.handleInput('AC')}>AC</button>
  	  	<button id="divide"
  	  			value="/" 
  	  			style={{background: 'rgb(102, 102, 102)'}}
  	  			onClick={() => this.props.handleInput('/')}>/</button>
  	  	<button id="multiply"
  	  			value="x" 
  	  			style={{background: 'rgb(102, 102, 102)'}}
  	  			onClick={() => this.props.handleInput('*')}>x</button>
  	  	<button id="seven"
  	  			value="7"
  	  			onClick={() => this.props.handleInput('7')}>7</button>
  	  	<button id="eight"
  	  			value="8"
  	  			onClick={() => this.props.handleInput('8')}>8</button>
  	  	<button id="nine"
  	  			value="9"
  	  			onClick={() => this.props.handleInput('9')}>9</button>
  	  	<button id="subtract"
  	  			value="‑" 
  	  			style={{background: 'rgb(102, 102, 102)'}}
  	  			onClick={() => this.props.handleInput('-')}>-</button>
  	  	<button id="four"
  	  			value="4"
  	  			onClick={() => this.props.handleInput('4')}>4</button>
  	  	<button id="five"
  	  			value="5"
  	  			onClick={() => this.props.handleInput('5')}>5</button>
  	  	<button id="six"
  	  			value="6"
  	  			onClick={() => this.props.handleInput('6')}>6</button>
  	  	<button id="add"
  	  			value="+" 
  	  			style={{background: 'rgb(102, 102, 102)'}}
  	  			onClick={() => this.props.handleInput('+')}>+</button>
  	  	<button id="one"
  	  			value="1"
  	  			onClick={() => this.props.handleInput('1')}>1</button>
  	  	<button id="two"
  	  			value="2"
  	  			onClick={() => this.props.handleInput('2')}>2</button>
  	  	<button id="three"
  	  			value="3"
  	  			onClick={() => this.props.handleInput('3')}>3</button>
  	  	<button id="zero"
  	  			value="0" 
  	  			className="jumbo"
  	  			onClick={() => this.props.handleInput('0')}>0</button>
  	  	<button id="decimal"
  	  			value="."
  	  			onClick={() => this.props.handleInput('.')}>.</button>
  	  	<button id="equals"
  	  			value="=" 
  	  			style={{background: 'rgb(0, 68, 102)', position: 'absolute', height: 130+'px', bottom: 180+'px'}}
  	  			onClick={() => this.props.handleInput('=')}>=</button>
  	  </div>
  	);
  }
}

export default KeyPad;