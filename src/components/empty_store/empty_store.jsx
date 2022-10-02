import React from 'react';
import styles from './empty_store.module.css';

const EmptyStore = (props) => {

    const imgPath = './imgs/empty.png';

    return(
        <div className={styles.emptyStore}>
        <img alt='img' src={imgPath}></img>
        <p>
            장바구니가 비어있어요.
        </p>
        <p>        
            상품 구경 후 장바구니에 상품을 담아보세요!
        </p>
        </div>
    );
};

export default EmptyStore;