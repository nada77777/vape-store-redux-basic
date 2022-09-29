import React from 'react';
import styles from './input_store.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { insertItem } from '../redux/store';



const InputStore = ({ item }) => {

    const dispatch = useDispatch();
    
    const inputItem = () => {
        console.log('test');
        dispatch(insertItem(item));
    };


    return(
        <button onClick={inputItem} className={styles.button}>ip</button>
    );
};

export default InputStore;