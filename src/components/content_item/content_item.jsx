import React from 'react';
import { useNavigate } from 'react-router-dom';


import styles from './content_item.module.css';


const ContentItem = ({ item }) => {

    const { company, imgPath, info, size, strong, title, tag} = item;
    
    const navigate = useNavigate();
    const onClick = () => {
        console.log('Item click');
        navigate(`/detail/${item.id}`, {state: {item}});

    };

    return(
        <li onClick={onClick} className={styles.item}>
            <div className={styles.imgBox}>
                <img alt='img' src={imgPath}></img>
            </div>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.company}>{company}</p>
            <p className={styles.tag}>{tag}</p>
        </li>
    );
};

export default ContentItem;