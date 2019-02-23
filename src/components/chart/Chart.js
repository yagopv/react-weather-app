import React from 'react';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from 'react-sparklines';
import { round, sum } from 'lodash';
import styles from './Chart.module.scss';

function average(data) {
  return round(sum(data) / data.length);
}

const ChartInfo = props => {
  return (
    <div className={styles.info}>
      {average(props.data)} <span className={styles.units}>{props.units}</span>
    </div>
  );
};

function Chart(props) {
  return (
    <div className={styles.chartContainer}>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <ChartInfo {...props} />
    </div>
  );
}

export default Chart;
