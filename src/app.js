import React, { Component } from 'react';

import { SpinnerCSSWithPercentage } from './components/spinnerCSS';
import { SpinnerJSWithPercentage } from './components/spinnerJS';
import { Button } from './components/button';

import './app.scss';

class App extends Component {
  timer = null;

  state = {
    spinnerValue: 0,
    isSpinnerActive: false
  };

  handleSpinnerStart = () => {
    const {
      state: { spinnerValue },
      props: { delay }
    } = this;

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
    }, delay);
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
      clearInterval(this.timer);
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
              <SpinnerCSSWithPercentage
                value={spinnerValue}
                disabled={!isSpinnerActive}
              ></SpinnerCSSWithPercentage>
            </div>
            <div className="col">
              <h4>JS Spinner</h4>
              <SpinnerJSWithPercentage
                value={spinnerValue}
                color="secondary"
                disabled={!isSpinnerActive}
              ></SpinnerJSWithPercentage>
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

App.defaultProps = {
  delay: 300
};

export default App;
