import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { NavLink } from 'react-router-dom';
const cx = classNames.bind(styles);

function menuItem({ title, to, icon }) {
    return (
        <NavLink className={(nav) => cx('menuItem', {active: nav.isActive})} to={to}>
            {icon}
            <span className={cx('titleItem')}>{title}</span>
        </NavLink>
    );
}

export default menuItem;
