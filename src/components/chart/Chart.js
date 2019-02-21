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

function Chart(props) {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div className={styles.info}>
        {average(props.data)}{' '}
        <span className={styles.units}>{props.units}</span>
      </div>
    </div>
  );
}

export default Chart;
