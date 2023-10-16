import PropTypes from 'prop-types';
import random from '../js/random';
import css from '../css/Statistics.module.css';

export function StatItems({ label, percentage }) {
  return (
    <li className={css.item} style={{ backgroundColor: random() }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
}

StatItems.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};