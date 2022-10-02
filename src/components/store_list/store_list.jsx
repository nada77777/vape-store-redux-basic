import React from 'react';
import { useDispatch } from 'react-redux';
import { cartItem } from '../redux/reducer';
import styles from './store_list.module.css';
const StoreList = ({ item }) => {

    const dispatch = useDispatch();


    return(
        <li className={styles.storeList}>
            <h1>{item.id}</h1>
            <h1 className={styles.name}>{item.title}</h1>
            <h1>{item.count}</h1>
            <button onClick={() => {dispatch(cartItem.actions.plusCount(item))}}>plus</button>
            <button onClick={() => {dispatch(cartItem.actions.deleteItem(item))}}>delete</button>
        </li>
    );
};

export default StoreList;