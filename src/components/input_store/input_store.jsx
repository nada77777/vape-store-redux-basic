import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartItem } from '../redux/reducer';
import styles from './input_store.module.css';




const InputStore = ({ item }) => {

    const dispatch = useDispatch();
    // const selector = useSelector();
    const inputItem = () => {
        dispatch(cartItem.actions.insertItem(item));
    };


    return(
        <button onClick={inputItem} className={styles.button}>장바구니 담기</button>
    );
};

export default InputStore;