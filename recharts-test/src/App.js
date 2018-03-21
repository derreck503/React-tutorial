import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LineGraph from './components/Recharts/LineGraph';
import BarGraph from './components/Recharts/BarGraph';
import PieCharts from './components/Recharts/PieChart';
import VictoryBar from './components/Victory/VictoryBar';
import VictoryPie from './components/Victory/VictoryPie';
import C3Bar from './components/C3/C3Bar';
import C3Pie from './components/C3/C3Pie';
import C3Line from './components/C3/C3Line';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Chart Libraries</h1>
        </header>
        <div className="container-fluid">
          <br />
          <div className="row">
            <h1>Recharts:</h1>
            <div className="col-md-3">
              <LineGraph />
            </div>
            <div className="col-md-3">
              <BarGraph />
            </div>
            <div className="col-md-1">
            </div>
            <div className="col-md-3">
              <PieCharts />
            </div>
            <p><strong>Pros:</strong> React based, user friendly, easy to use, and most popular react charting library.
            &nbsp;<strong>Cons:</strong> Only works with react.</p>
          </div>
          <div className="row">
            <h1>Victory:</h1>
            <div className="col-md-3">
              <VictoryBar />
            </div>
            <div className="col-md-3">
              <VictoryPie />
            </div>
            <p><strong>Pros:</strong> React based, user friendly, easy to use, and most popular react charting library.
            &nbsp;<strong>Cons:</strong> Requires a lot of configuration to look decent, wordy setup, and maintained by small company.</p>
          </div>
          <div className="row">
            <h1>C3:</h1>
            <div className="col-md-3">
              <C3Line />
            </div>
            <div className="col-md-3">
              <C3Bar />
            </div>
            <div className="col-md-3">
              <C3Pie />
            </div>
            <p><strong>Pros:</strong> Based off of D3 and works with non-react front-ends.
            &nbsp;<strong>Cons:</strong> Third party wrapper library, which can be confusing to use. Also, not as popular as recharts.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
