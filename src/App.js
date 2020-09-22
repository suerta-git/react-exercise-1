import React, { Component } from 'react';
import Description from './conponents/Description';
import Introduction from './conponents/Introduction.js';
import './App.scss';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Description />
        <hr />
        <Introduction />
      </main>
    );
  }
}

export default App;
