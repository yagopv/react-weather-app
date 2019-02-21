import React from 'react';
import { connect } from 'react-redux';

import styles from './WeatherList.module.scss';
import Chart from '../../components/chart/Chart';
import GoogleMap from '../../components/google-map/GoogleMap';

class WeatherList extends React.Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const { lat, lon } = cityData.city.coord;

    return (
      <tr key={name}>
        <td className={styles.bodyCell}>
          <GoogleMap lat={lat} lon={lon} />
        </td>
        <td className={styles.bodyCell}>
          <Chart data={temps} color="orange" units="&#8451;" />
        </td>
        <td className={styles.bodyCell}>
          <Chart data={humidities} color="green" units="%" />
        </td>
        <td className={styles.bodyCell}>
          <Chart data={pressures} color="black" units="hPA" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <div className={styles.weatherListContainer}>
        <table className={styles.weatherList}>
          <thead>
            <tr className={styles.headerRow}>
              <th className={styles.headerCell}>City </th>
              <th className={styles.headerCell}>Temperature (&#8451;) </th>
              <th className={styles.headerCell}>Humidities (%) </th>
              <th className={styles.headerCell}>Pressures (hPa)</th>
            </tr>
          </thead>
          <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
