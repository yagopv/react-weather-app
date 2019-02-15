import { combineReducers } from 'redux';
import WeatherReducer from './reducers/weather';

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
