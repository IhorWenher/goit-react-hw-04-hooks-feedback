import React, { Component } from 'react';
import Statistics from './components/FeedbackWidget/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div>
        <Statistics good={this.state.good} neutral={} bad={} total={} positivePercentage={} />
      </div>
    );
  }
}

export default App;
