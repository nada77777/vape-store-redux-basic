import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = (props) => {



    



    return(
        <nav className={styles.navbar}>
            <li>111h</li>
            <Link to='/repo'>222st</Link>
        </nav>
    );
};

export default Navbar;