import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './SearchBar.module.scss';
import { fetchWeather } from '../../store/actions/weather';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    });
  }

  onFormSubmit(event) {
    event.preventDefault();

    if (this.state.term) {
      this.props.fetchWeather(this.state.term);
      this.setState({ term: '' });
    }
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className={styles.searchForm}>
        <input
          placeholder="Get a five-day forecast in your favourite cities in Spain"
          value={this.state.term}
          onChange={this.onInputChange}
          className={styles.searchFormInput}
        />
        <button type="submit" className={styles.searchFormButton}>
          Submit
        </button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
