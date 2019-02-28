import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './WeatherList.module.scss';
import Chart from '../../components/chart/Chart';
import GoogleMap from '../../components/google-map/GoogleMap';

class WeatherList extends Component {
  renderWeather(cityData) {
    const { id } = cityData.city;
    const { lat, lon } = cityData.city.coord;
    const temps = cityData.list.map(weather => weather.main.temp);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const pressures = cityData.list.map(weather => weather.main.pressure);

    return (
      <tr key={id}>
        <td className={styles.bodyCell}>
          <GoogleMap lat={lat} lon={lon} />
        </td>
        <td className={styles.bodyCell}>
          <Chart data={temps} color="red" units="&#8451;" />
        </td>
        <td className={styles.bodyCell}>
          <Chart data={humidities} color="orange" units="%" />
        </td>
        <td className={styles.bodyCell}>
          <Chart data={pressures} color="white" units="hPA" />
        </td>
      </tr>
    );
  }

  renderLoading(isFetching) {
    return isFetching ? <p className={styles.loading}>Loading ...</p> : '';
  }

  renderError(error) {
    if (!error) {
      return null;
    }

    return <p className={styles.error}>{error.toUpperCase()}</p>;
  }

  render() {
    const { weatherData, error, isFetching } = this.props.weather;

    return (
      <div className={styles.weatherListContainer}>
        {this.renderLoading(isFetching)}
        {this.renderError(error)}
        <table className={styles.weatherList}>
          <thead>
            <tr className={styles.headerRow}>
              <th className={styles.headerCell}>City </th>
              <th className={styles.headerCell}>Temperature (&#8451;) </th>
              <th className={styles.headerCell}>Humidities (%) </th>
              <th className={styles.headerCell}>Pressures (hPa)</th>
            </tr>
          </thead>
          <tbody>{weatherData.map(this.renderWeather)}</tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
