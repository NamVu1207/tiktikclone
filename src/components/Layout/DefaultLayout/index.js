import Header from '~/components/Layout/components/Header';
import Slidebar from '~/components/Layout/components/Slidebar';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);
const uniqueId = 'cindycutexxx';

function DefaultLayout({ children }) {
    const [searchResult, setSearchResult] = useState([]);

    const url = `https://tiktok-video-no-watermark2.p.rapidapi.com/user/info?unique_id=%40${encodeURIComponent(
        uniqueId,
    )}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '09f1676128msh3cf4502a13f1551p1e17fejsnfcdebac6912b',
            'X-RapidAPI-Host': 'tiktok-video-no-watermark2.p.rapidapi.com'
        }
    };
    useEffect(() => {
        fetch(url, options)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data.user);
            });
    }, []);
    return (
        <div className={cx('wrapper')}>
            <Header data={searchResult}/>
            <div className={cx('container')}>
                <Slidebar data={searchResult}/>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
