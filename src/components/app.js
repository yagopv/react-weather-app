import React from 'react';
import SearchBar from '../containers/searchBar';
import WeatherList from '../containers/weatherList';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
