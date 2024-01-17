import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { wrapper as PopperWrapper } from '~/components/Popper';
import Header from './Header';
import MenuItem from './Menuitem';
import styles from './Menu.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const [menuItem, setmenuItem] = useState([{ data: items }]);
    const currentItem = menuItem[menuItem.length - 1];
    const renderItems = () => {
        return currentItem.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setmenuItem((ProgressEvent) => [...ProgressEvent, item.children]);
                            console.log(item.children);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menuPopper')}>
                        {menuItem.length > 1 && (
                            <Header
                                title={currentItem.title}
                                onBack={() => {
                                    setmenuItem((ProgressEvent) => ProgressEvent.slice(0, ProgressEvent.length - 1));
                                }}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setmenuItem((ProgressEvent) => ProgressEvent.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
