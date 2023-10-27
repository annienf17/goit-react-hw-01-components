import PropTypes from 'prop-types';
import { getRandomHexColor } from '../../services/getRandomHexColor';
import css from './Statistics.module.css';


export function StatItems({ label, percentage }) {
  return (
    <li className={css.item} style={{ backgroundColor: getRandomHexColor() }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>  
  );
}


StatItems.propTypes={
  label: PropTypes.string,
  percentage: PropTypes.number,
};

 