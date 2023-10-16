import PropTypes from 'prop-types';
import { StatItems } from './StatItems';
import css from '../css/Statistics.module.css';

export function Statistics({ title, stats }) {
  const statList = stats.map(stat => (
    <StatItems
      key={stat.id}
      label={stat.label}
      percentage={stat.percentage}
    />
  ));
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css['stat-list']}>{statList}</ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};