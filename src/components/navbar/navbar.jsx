import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = (props) => {

    return(
        <nav className={styles.navbar}>
            <h1>Vape shop</h1>
            <Link to='/'>메인</Link>
            <Link to='/repo'>장바구니</Link>
        </nav>
    );
};

export default Navbar;