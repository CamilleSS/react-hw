import React, { Component } from 'react';
import './app.css';

class App extends Component {
  render() {
    return (
      <div id="main-wrapper">{this.props.children}</div>
    )
  } 
}

export default App;