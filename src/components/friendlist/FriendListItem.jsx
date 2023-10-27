import PropTypes from 'prop-types';
import css from './FriendList.module.css';


export function FriendListItem({ status, avatar, name }) {
const statusStage = status === true ? css.true : css.false
    return (
        <li className={css.item}>
        <span className={[css.status, statusStage].join(' ')}></span>{/* class="status true false" */}
        <img src={avatar} alt={name} width="48" />
        <p>{name}</p>
      </li>
      );
}

  FriendListItem.propTypes={
    status: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string,
  };
  
