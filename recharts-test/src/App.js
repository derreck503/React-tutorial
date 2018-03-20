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
          </div>
          <div className="row">
            <h1>Victory:</h1>
            <div className="col-md-3">
              <VictoryBar />
            </div>
            <div className="col-md-3">
              <VictoryPie />
            </div>
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
          </div>
        </div>
      </div>
    );
  }
}

export default App;
