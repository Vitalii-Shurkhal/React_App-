import React from "react";
import styles from'./Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <img src="https://themified.com/friend-finder/images/logo.png" alt=""/>
        </header>
    );

};

export default Header;