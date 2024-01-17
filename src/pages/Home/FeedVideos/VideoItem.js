import classNames from 'classnames/bind';
import styles from './FeedVideos.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBookmark,
    faCheckCircle,
    faCommentDots,
    faHeart,
    faMusic,
    faShare,
} from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import ButtonVideo from './Button';

const cx = classNames.bind(styles);
function VideoItem({ data }) {
    return (
            <div className={cx('videoItem')}>
                <div className={cx('leftContent')}>
                    <img
                        className={cx('Avatar')}
                        src={data.author.avatar}
                        alt={data.author.unique_id}
                    ></img>
                </div>
                <div className={cx('rightContent')}>
                    <div className={cx('header')}>
                        <div className={cx('userInfo')}>
                            <h3 className={cx('nickname')}>{data.author.unique_id}</h3>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                            <div className={cx('fullname')}>{data.author.nickname}</div>
                        </div>
                        <p className={cx('title')}>{data.title}</p>
                        <div className={cx('song')}>
                            <FontAwesomeIcon className={cx('songIcon')} icon={faMusic} />
                            <a href="" className={cx('songName')}>
                                {data.music_info.title}
                            </a>
                        </div>
                    </div>
                    <Button className={cx('btnFollow')} small secondary>
                        Follow
                    </Button>
                    <div className={cx('content')}>
                        <div className={cx('Video')}>
                            <video
                                className={cx('videoInfo')}
                                type="video/mp4" controls src={data.play}
                            ></video>
                        </div>
                        <div className={cx('buttons')}>
                            <ButtonVideo
                                icon={<FontAwesomeIcon style={{ height: 24, width: 24 }} icon={faHeart} />}
                                amount="6.7M"
                                clas="heart"
                            ></ButtonVideo>
                            <ButtonVideo
                                icon={
                                    <FontAwesomeIcon style={{ height: 24, width: 24 }} icon={faCommentDots} />
                                }
                                amount="1.2k"
                            ></ButtonVideo>
                            <ButtonVideo
                                icon={<FontAwesomeIcon style={{ height: 24, width: 24 }} icon={faBookmark} />}
                                amount="2.7M"
                                clas="saved"
                            ></ButtonVideo>
                            <ButtonVideo
                                icon={<FontAwesomeIcon style={{ height: 24, width: 24 }} icon={faShare} />}
                                amount="200"
                            ></ButtonVideo>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default VideoItem;
