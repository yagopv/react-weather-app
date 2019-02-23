import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = '[Weather] FETCH_WEATHER';
export const FETCH_WEATHER_SUCCESS = '[Weather] FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILED = '[Weather] FETCH_WEATHER_FAILED';

export function fetchWeather(city) {
  return async dispatch => {
    try {
      dispatch({ type: FETCH_WEATHER });
      const url = `${ROOT_URL}&q=${city},es&units=metric`;
      const response = await axios.get(url);

      dispatch({
        type: FETCH_WEATHER_SUCCESS,
        payload: response
      });
    } catch (error) {
      dispatch({
        type: FETCH_WEATHER_FAILED,
        payload: error.response.data.message
      });
    }
  };
}
