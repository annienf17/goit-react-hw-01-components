import PropTypes from 'prop-types';
import css from '../css/Statistics.module.css';

function getRandomHexColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

export function StatItems({ label, percentage }) {
  return (
    <li className={css.item} style={{ backgroundColor: getRandomHexColor() }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
}

StatItems.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

 
