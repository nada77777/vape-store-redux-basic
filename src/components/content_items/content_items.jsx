import React from 'react';
import ContentItem from '../content_item/content_item';
import styles from './content_items.module.css';

const ContentItems = ({ items, InputBtn }) => {





    return(
        <div className={styles.items}>
            <ul className={styles.item_lists}>
                {items.map(item => <ContentItem key={item.id} item={item} InputBtn={InputBtn} />)}
            </ul>
        </div>      
    );
};

export default ContentItems;