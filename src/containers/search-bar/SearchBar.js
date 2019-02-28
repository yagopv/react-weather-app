import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './SearchBar.module.scss';
import { fetchWeather } from '../../store/actions/weather';

function SearchBar({ fetchWeather }) {
  const [term, setTerm] = useState('');

  const onFormSubmit = event => {
    event.preventDefault();

    if (term) {
      fetchWeather(term);
      setTerm('');
    }
  };

  return (
    <form onSubmit={onFormSubmit} className={styles.searchForm}>
      <input
        placeholder="Get a five-day forecast in your favourite cities in Spain"
        value={term}
        onChange={event => setTerm(event.target.value)}
        className={styles.searchFormInput}
      />
      <button type="submit" className={styles.searchFormButton}>
        Submit
      </button>
    </form>
  );
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
