import React, { Component } from 'react';
import gitHubUser from './githubuser';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        <h2>React Redux Router</h2>
        <gitHubUser login = {ballred95} />
      </div>
    );
  }
}
