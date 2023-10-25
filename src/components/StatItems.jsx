import PropTypes from 'prop-types';
import css from '../css/Statistics.module.css';


export function StatItems({ label, percentage }) {
  return (
    <li className={css.item} style={{ backgroundColor: getRandomHexColor() }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>  
  );
}

function getRandomHexColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
     //conditions, to meet WCAG AAA standard
if(r+g+b > 500) {
  return `rgb(204, 8, 127)`;
} else {
  return  `rgb(${r}, ${g}, ${b})`;
} 
}

StatItems.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

 
