import {
  FETCH_WEATHER,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILED
} from '../actions/weather';

const initialState = {
  isFetching: false,
  weatherData: [],
  error: null
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_WEATHER:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        isFetching: false,
        weatherData: [payload.data, ...state.weatherData],
        error: null
      };
    case FETCH_WEATHER_FAILED:
      return {
        ...state,
        isFetching: false,
        error: payload
      };
    default:
      return state;
  }
}
