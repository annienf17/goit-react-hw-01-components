import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import css from '../css/FriendList.module.css';

export function FriendList({ friends }) {
        const friendList = friends.map(friend => (
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              status={friend.isOnline}
              key={friend.id}
            />
          ));
          return (
              <ul className={css['friend-list']}>{friendList}</ul>  
          );
  }

  FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
      })
    ),
  };



