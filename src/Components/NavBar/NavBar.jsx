import React from "react";
import styles from './NavBar.module.css'

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <div>
                <ul>
                    <i className="fas fa-user-circle"></i>
                    <a href="/Profile">My Page</a>
                </ul>

            </div>
            <div>
                <ul>
                    <i className="fas fa-envelope"></i>
                    <a href="/Dialogs">Messages</a>
                </ul>
            </div>
           
            <div>
                <ul>
                    <i className="far fa-newspaper"></i>
                    <a href="/News">News</a>
                </ul>
            </div>
            <div>
                <ul>
                    <i className="fas fa-music"></i>
                    <a href="/Music">Music</a>
                </ul>
            </div>
            <div>
                <ul>
                    <i className="fas fa-user-cog"></i>
                    <a href="/Settings">Settings</a>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;