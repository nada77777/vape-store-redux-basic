import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import styles from './item_detail.module.css';


const ItemDetail = ({ InputBtn }) => {
    const location = useLocation();
    const item = location.state.item;

    const { company, imgPath, info, size, strong, title, tag} = item;

    return(
        <>
        <Navbar/>
        <div className={styles.itemDetail}>
            <div className={styles.imgBox}>
                <img alt='img' src={imgPath}></img>
            </div>
            <div className={styles.itemSpec}>
                <p className={styles.company}>{company}</p>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.strong}>{strong}</p>
                <p className={styles.size}>{size}</p>
            </div>
            <div className={styles.itemInfo}>
                <p className={styles.info}>{info}</p>
                <p className={styles.tag}>{tag}</p>
            </div>
                <InputBtn item={item}/>
        </div>
        </>
    );
};

export default ItemDetail;