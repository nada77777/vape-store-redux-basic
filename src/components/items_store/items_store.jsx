import { current } from '@reduxjs/toolkit';
import React from 'react';
import styles from './items_store.module.css';
import { useSelector } from 'react-redux';
import StoreList from '../store_list/store_list';
import EmptyStore from '../empty_store/empty_store';
import Navbar from '../navbar/navbar';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

const ItemsStore = () => {
    // const redux = useSelector(state => state.cartItem);
    const cartItems = useSelector((state) => state.cartItem) || null;
    
    return(
        <div className={styles.itemStore}>
            <Navbar />
            {cartItems.length > 0 ? 
                        <ul className={styles.ul}>
                        <li className={styles.li}>
                            <h1>상품코드</h1>
                            <h1 className={styles.name}>상품명</h1>
                            <h1>수량</h1>
                            <h1>수량증가</h1>
                            <h1>상품삭제</h1>
                        </li>
                    {cartItems.map(item => <StoreList key={item.id} item={item} />)}
                    </ul>
                : <EmptyStore />    
                }
        </div>
    );
};

export default ItemsStore;