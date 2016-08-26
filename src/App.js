import React, { Component } from 'react';
import Synthesizer from './components/synthesizer/Synthesizer';
require('./styles/base.scss');

class App extends Component {
  render() {
    return (
      <section>
        <Synthesizer />
      </section>
    );
  }
}

export default App;
