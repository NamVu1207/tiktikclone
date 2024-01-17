import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem({ data, small = false, large = false }) {
    const classes = cx('wrapper', { small, large });
    return (
        <Link to={`/@${data.uniqueId}`} className={classes}>
            <img className={cx('avatar')} src={data.avatarThumb} alt={data.uniqueId} />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{data.uniqueId}</span>
                    {data.verified && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </p>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
