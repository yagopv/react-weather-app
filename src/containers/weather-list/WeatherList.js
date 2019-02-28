import React from 'react';
import { connect } from 'react-redux';

import styles from './WeatherList.module.scss';
import Chart from '../../components/chart/Chart';
import GoogleMap from '../../components/google-map/GoogleMap';

function WeatherRow({ data }) {
  const { lat, lon } = data.city.coord;
  const temps = data.list.map(weather => weather.main.temp);
  const humidities = data.list.map(weather => weather.main.humidity);
  const pressures = data.list.map(weather => weather.main.pressure);

  return (
    <tr>
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

function Loading({ isFetching }) {
  return isFetching ? <p className={styles.loading}>Loading ...</p> : '';
}

function Error({ error }) {
  if (!error) {
    return null;
  }

  return <p className={styles.error}>{error.toUpperCase()}</p>;
}

function WeatherList({ weather }) {
  const { weatherData, error, isFetching } = weather;

  return (
    <div className={styles.weatherListContainer}>
      <Loading isFetching={isFetching} />
      <Error error={error} />
      <table className={styles.weatherList}>
        <thead>
          <tr className={styles.headerRow}>
            <th className={styles.headerCell}>City </th>
            <th className={styles.headerCell}>Temperature (&#8451;) </th>
            <th className={styles.headerCell}>Humidities (%) </th>
            <th className={styles.headerCell}>Pressures (hPa)</th>
          </tr>
        </thead>
        <tbody>
          {weatherData.map(weather => (
            <WeatherRow data={weather} key={weather.city.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
