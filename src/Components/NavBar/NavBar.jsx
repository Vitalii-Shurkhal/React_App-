import React from "react";
import styles from './NavBar.module.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <div>
                <ul>
                    <i className="fas fa-user-circle"></i>
                    <NavLink to="/Profile" activeClassName ={styles.activeLink}>My Page</NavLink>
                </ul>

            </div>
            <div>
                <ul>
                    <i className="fas fa-envelope"></i>
                    <NavLink to="/Dialogs" activeClassName ={styles.activeLink}>Messages</NavLink>
                </ul>
            </div>

            <div>
                <ul>
                    <i className="far fa-newspaper"></i>
                    <NavLink to="/News" activeClassName ={styles.activeLink}>News</NavLink>
                </ul>
            </div>
            <div>
                <ul>
                    <i className="fas fa-music"></i>
                    <NavLink to="/Music" activeClassName ={styles.activeLink}>Music</NavLink>
                </ul>
            </div>
            <div>
                <ul>
                    <i className="fas fa-user-cog"></i>
                    <NavLink to="/Settings" activeClassName ={styles.activeLink}>Settings</NavLink>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;