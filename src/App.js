import React, { Component } from 'react';

import styles from './App.module.scss';
import SearchBar from './containers/searchBar';
import WeatherList from './containers/weatherList';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <SearchBar />
        <WeatherList />
      </React.Fragment>
    );
  }
}

export default App;
