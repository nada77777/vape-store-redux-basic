import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './item_detail.module.css';


const ItemDetail = ({ InputBtn }) => {
    const location = useLocation();
    console.log(location);
    const item = location.state.item;

    return(
        <div className={styles.itemDetail}>
            <h1>{item.id}</h1>
            <h3>{item.price}</h3>
            <InputBtn/>
        </div>
    );
};

export default ItemDetail;