import React, { Component } from 'react';
import {isOperator} from './utility';
import Display from './Display';
import KeyPad from './KeyPad';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: '',
      input: '0'
    }

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(key) {
    if (key === 'AC') {
      // Clear the text that's in the expression and set the input text to 0
      this.setState({expression: '', input: '0'});
    } else if (isOperator(key)) { 
      // If the last key of the expression was an operator, change that key to be
      // the operator that was just typed. Otherwise, append the operator to the 
      // expression
      if (isOperator(this.state.expression.slice(-1))) {
        this.setState(prevState => ({
          expression: prevState.expression.slice(0, -1) + key
        }));
      } else {
        this.setState(prevState => ({
          expression: prevState.expression.concat(key)
        }));
      }

      // Set the input screen to whatever operator was just typed
      this.setState({input: key});
    } else if (key === '=') { 
      // Evaluate and display the expression we have thus far if user clicks '='
      let result = eval(this.state.expression);
      this.setState(prevState => ({
        expression: prevState.expression.concat(key + result),
        input: result
      }));
    } else {
      // Add the new pressed key onto the expression
      this.setState(prevState => ({
        expression: prevState.expression.concat(key)
      }));

      // Handles what's displayed on the input screen
      if (isOperator(this.state.input) || this.state.input === '0') {
        this.setState({input: key});
      } else {
        this.setState(prevState => ({
          input: prevState.input.concat(key)
        }));
      }
    }
  }

  render() {
    return (
      <div className='calculator'>
        <Display 
          expression={this.state.expression}
          input={this.state.input} />
        <KeyPad 
          handleInput={this.handleInput} />
      </div>
    );
  }
}

export default App;
