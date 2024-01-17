import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightFromBracket,
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faLightbulb,
    faMessage,
    faPlus,
    faUser,
    faVideoCamera,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/menu';
import 'tippy.js/dist/tippy.css';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import Search from '../Search';

const cx = classNames.bind(styles);
const currentUser = true;
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    id: 'en',
                    title: 'English',
                },
                {
                    id: 'vni',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },

    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header({data}) {
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@soianchay',
        },
        {
            icon: <FontAwesomeIcon icon={faBookmark} />,
            title: 'Favorites',
            to: '/favorite',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faVideoCamera} />,
            title: 'Live Studio',
            to: '/livestudio',
        },
        {
            icon: <FontAwesomeIcon icon={faLightbulb} />,
            title: 'Live Creator Hub',
            to: '/creatorhub',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Log out',
            to: '/Logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('headerLeftContainer')}>
                    <a href="" style={{ height: 42 }}>
                        <img src={images.logo} alt="TikTok" />
                    </a>
                </div>
                <div className={cx('headerCenterContainer')}>
                    <Search></Search>
                </div>
                <div className={cx('headerRightContainer')}>
                    <Button leftIcon={<FontAwesomeIcon icon={faPlus} />} secondary to={'/Upload'}>
                        Upload
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy content="Messages">
                                <button className={cx('actionBtn')}>
                                    <img className={cx('imgMess')} src={images.message}></img>
                                </button>
                            </Tippy>
                            <Tippy content="Inbox">
                                <button className={cx('actionBtn')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary> Log in </Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS}>
                        {currentUser ? (
                            <img
                                className={cx('userAvatar')}
                                alt="avatar"
                                src={data.avatarThumb}
                            ></img>
                        ) : (
                            <button className={cx('moreBtn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
