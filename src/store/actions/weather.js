import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  return async dispatch => {
    const url = `${ROOT_URL}&q=${city},us`;
    const response = await axios.get(url);

    dispatch({
      type: FETCH_WEATHER,
      payload: response
    });
  };
}
