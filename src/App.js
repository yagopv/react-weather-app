import React from 'react';

import 'simple-css-reset/reset.css';

// eslint-disable-next-line
import styles from './App.module.scss';

import SearchBar from './containers/search-bar/SearchBar';
import WeatherList from './containers/weather-list/WeatherList';

function App() {
  return (
    <main>
      <SearchBar />
      <WeatherList />
    </main>
  );
}

export default App;
