import classNames from 'classnames/bind';
import styles from './FollowingAccounts.module.scss';
import { useState, useEffect } from 'react';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);
function FollowingAccounts({ data }) {
    const id = "7122825016463361026";
    const [searchResult, setSearchResult] = useState([]);
    const transformData = (data) => {
        const newdata = data.map((item) => {
            const newitem = { ...item };
            newitem['avatarThumb'] = item['avatar'];
            newitem['uniqueId'] = item['unique_id'];
            delete newitem['avatar'];
            delete newitem['unique_id'];
            return newitem;
        });
        return newdata;
    };
    const url = `https://tiktok-video-no-watermark2.p.rapidapi.com/user/following?user_id=${id}&count=10&time=0`;
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
                console.log(res.data);
                setSearchResult(transformData(res.data.followings));
            });
    }, []);
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('header')}> Following Accounts</h3>
            {searchResult?.map((item) => (
                <AccountItem key={item.id} data={item} small />
            ))}
        </div>
    );
}

export default FollowingAccounts;
