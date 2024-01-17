import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Button({ icon, amount, clas = null }) {
    const [isActive, setActive] = useState(false);
    const classes = cx('wrapper', isActive ? clas : null );
    return (
        <button
            className={classes}
            onClick={() => {
                setActive((current) => !current);
            }}
        >
            <span className={cx('icon')}>{icon}</span>
            <div className={cx('amount')}>{amount}</div>
        </button>
    );
}

export default Button;
