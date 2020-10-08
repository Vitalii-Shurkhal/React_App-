import React from "react";
import styles from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts.jsx';
import Description from './Description/Description'
import Ava from "./Ava/Ava";
import Wallpaper from "./Wallpaper/Wallpaper";

const Profile = () => {
    return (
        <div className={styles.content}>
           <Wallpaper />
            <div>
                <Ava />
                <Description />
            </div>
            <MyPosts />
        </div>
    );
};

export default Profile;