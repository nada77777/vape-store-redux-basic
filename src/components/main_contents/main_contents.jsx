import React from 'react';
import styles from './main_contents.module.css';
import { useState } from 'react';
import ContentItems from '../content_items/content_items';
import Navbar from '../navbar/navbar';

const MainContents = ({ InputBtn, items }) => {


    return(
        <div className={styles.mainContents}>
            <Navbar/>
            <img className={styles.mainImg} alt='img' src='./imgs/main.jpg'></img>
            <ContentItems items={items} InputBtn={InputBtn} />
        </div>
    );
};

export default MainContents;