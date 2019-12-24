import React, { Component } from 'react';

import { SpinnerWithPercentage } from './components/spinner';
import { SpinnerOtherWithPercentage } from './components/spinnerOther';
import { Button } from './components/button';

import './app.scss';

class App extends Component {
  timer = null;

  state = {
    spinnerValue: 0,
    isSpinnerActive: false
  };

  handleSpinnerStart = () => {
    const { spinnerValue } = this.state;

    this.setState({
      isSpinnerActive: true,
      spinnerValue: spinnerValue < 100 ? spinnerValue || 1 : 0
    });

    this.timer = setInterval(() => {
      if (this.state.spinnerValue < 100) {
        return this.setState(({ spinnerValue }) => ({
          spinnerValue: spinnerValue + 1
        }));
      }
      this.handleSpinnerStop();
    }, 300);
  };

  handleSpinnerStop = () => {
    clearInterval(this.timer);
    this.setState({ isSpinnerActive: false });
  };

  handleSpinnerReset = () => {
    this.handleSpinnerStop();
    this.setState({ spinnerValue: 0 });
  };

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  render() {
    const { spinnerValue, isSpinnerActive } = this.state;

    return (
      <div className="app">
        <header className="app-header">
          <h1>Spinner demo</h1>
        </header>
        <section className="app-content">
          <div className="row">
            <div className="col">
              <h4>CSS Spinner</h4>
              <SpinnerWithPercentage
                value={spinnerValue}
                disabled={!isSpinnerActive}
              ></SpinnerWithPercentage>
            </div>
            <div className="col">
              <h4>JS Spinner</h4>
              <SpinnerOtherWithPercentage
                value={spinnerValue}
                color="secondary"
                disabled={!isSpinnerActive}
              ></SpinnerOtherWithPercentage>
            </div>
          </div>
        </section>
        <footer className="app-footer">
          {isSpinnerActive ? (
            <Button
              type="button"
              className="btn btn--outline btn--primary"
              onClick={this.handleSpinnerStop}
            >
              Stop
            </Button>
          ) : (
            <Button type="button" className="btn btn--primary" onClick={this.handleSpinnerStart}>
              Start
            </Button>
          )}

          <Button
            type="button"
            className="btn btn--outline btn--secondary"
            disabled={!spinnerValue}
            onClick={this.handleSpinnerReset}
          >
            Reset
          </Button>
        </footer>
      </div>
    );
  }
}

export default App;
