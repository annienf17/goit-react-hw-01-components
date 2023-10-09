import PropTypes from "prop-types";
import css from '../css/Statistics.module.css';

  
export function Statistics ({ title, stats }) {
    return (
        <section class="statistics">
  <h2 className={css.title}>{title}</h2>

  <ul class="stat-list">
    <li class="item">
      <span class="label">.docx</span>
      <span class="percentage">4%</span>
    </li>
    <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li>
  </ul>
</section>

    )};
   


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