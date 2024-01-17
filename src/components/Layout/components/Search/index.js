import { useState, useEffect, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import AccountItem from '~/components/AccountItem';
import { wrapper as PopperWrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';

import useDebounce from '~/hooks/useDebounce';

const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const debounced = useDebounce(searchValue, 500);
    const [searchResult, setSearchResult] = useState([]);

    const [showResulf, setShowResulf] = useState(true);

    const inputRef = useRef();

    const url = `https://tiktok-video-no-watermark2.p.rapidapi.com/user/search?keywords=${encodeURIComponent(
        debounced,
    )}&count=10&cursor=0`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '09f1676128msh3cf4502a13f1551p1e17fejsnfcdebac6912b',
            'X-RapidAPI-Host': 'tiktok-video-no-watermark2.p.rapidapi.com',
        },
    };

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }
        fetch(url, options)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data.user_list);
            });
    }, [debounced]);

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
        setSearchResult([]);
    };

    const handleHideResulf = () => {
        setShowResulf(false);
    };

    return (
        <HeadlessTippy
            interactive
            visible={showResulf && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('searchResult')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('searchTitle')}>Accounts</h4>
                        {searchResult.map((resulf) => (
                            <AccountItem key={resulf.user.id} data={resulf.user} large />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResulf}
        >
            <div className={cx('searchbar')}>
                <input
                    ref={inputRef}
                    className={cx('searchbarInput')}
                    value={searchValue}
                    type="text"
                    placeholder="Search for videos"
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResulf(true)}
                />
                {!!searchValue && (
                    <button className={cx('close')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                <span className={cx('lineSearch')}></span>
                <button className={cx('find')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
