import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
import {iconSize} from 'constants';

export default function FriendListItem(props) {
    const { avatar, name, isOnline } = props;

    return (
        <li className={css.item}>
            <span className={`${css.status} ${isOnline && css.isOnline}`}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width={iconSize.xxl} />
            <p className={css.name}>{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}