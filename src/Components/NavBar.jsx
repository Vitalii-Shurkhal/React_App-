import React from "react";
import styles from './NavBar.module.css'

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <div>
                <ul>
                    <i className="fas fa-user-circle"></i>
                    <a href="">My Page</a>
                </ul>

            </div>
            <div>
                <ul>
                    <i className="fas fa-envelope"></i>
                    <a href="">Messages</a>
                </ul>
            </div>
            <div>
                <ul>
                    <i className="fas fa-envelope"></i>
                    <a href="">Comments</a>
                </ul>
            </div>
            <div>
                <ul>
                    <i className="far fa-newspaper"></i>
                    <a href="">News</a>
                </ul>
            </div>
            <div>
                <ul>
                    <i className="fas fa-music"></i>
                    <a href="">Music</a>
                </ul>
            </div>
            <div>
                <ul>
                    <i className="fas fa-user-cog"></i>
                    <a href="">Settings</a>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;