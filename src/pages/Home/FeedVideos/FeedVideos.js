import classNames from 'classnames/bind';
import styles from './FeedVideos.module.scss';
import { useEffect, useState } from 'react';
import VideoItem from './VideoItem';

const cx = classNames.bind(styles);

function FeedVideos() {
    const [searchResult, setSearchResult] = useState([]);

    const url = 'https://tiktok-video-no-watermark2.p.rapidapi.com/feed/list?region=VN&count=10';
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
            setSearchResult(res.data);
        });
    }, []);
    return (
        <div className={cx('wrapper')}>
            {searchResult?.map((resulf) => (
                <VideoItem key={resulf.video_id} data={resulf} />
            ))}
        </div>
    );
}

export default FeedVideos;
