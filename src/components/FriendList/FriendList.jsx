import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';

export default function FriendList({ friends }) {
    return (
        <ul class="friend-list">
            {friends.map(({ id, avatar, name, isOnline}) => (
                <FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline} 
                />
            ))}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.object,
    )
}