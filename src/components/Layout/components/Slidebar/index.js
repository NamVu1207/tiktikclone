import classNames from 'classnames/bind';
import styles from './Slidebar.module.scss';
import Menu, { MenuItem } from './menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faHomeUser, faUserCheck, faUserGroup, faVideo } from '@fortawesome/free-solid-svg-icons';
import FollowingAccounts from './FollowingAccounts';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: (
            <FontAwesomeIcon
                className={cx('iconItem')}
                style={{ height: 25, width: 25 }}
                icon={faHomeUser}
            />
        ),
        title: 'For You',
        to: '/',
    },
    {
        icon: (
            <FontAwesomeIcon
                className={cx('iconItem')}
                style={{ height: 25, width: 25 }}
                icon={faUserCheck}
            />
        ),
        title: 'Following',
        to: '/Following',
    },

    {
        icon: (
            <FontAwesomeIcon
                className={cx('iconItem')}
                style={{ height: 25, width: 25 }}
                icon={faUserGroup}
            />
        ),
        title: 'Friends',
        to: '/friend',
    },

    {
        icon: (
            <FontAwesomeIcon
                className={cx('iconItem')}
                style={{ height: 25, width: 25 }}
                icon={faCompass}
            />
        ),
        title: 'Explore',
        to: '/explore',
    },

    {
        icon: (
            <FontAwesomeIcon
                className={cx('iconItem')}
                style={{ height: 25, width: 25 }}
                icon={faVideo}
            />
        ),
        title: 'LIVE',
        to: '/live',
    },

    {
        icon: (
            <img
                className={cx('userAvatar')}
                alt="avatar"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkku_s0Ae3eR35Vgn-Jl6PWlOLh8O9Re5rDw&usqp=CAU"
            ></img>
        ),
        title: 'Profile',
        to: '/profile',
    },
];
function Slidebar({data}) {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                {MENU_ITEMS.map((item) => (
                    <MenuItem key={item.index} title={item.title} to={item.to} icon={item.icon} />
                ))}
            </Menu>
            <FollowingAccounts data={data}/>
        </aside>
    );
}

export default Slidebar;
