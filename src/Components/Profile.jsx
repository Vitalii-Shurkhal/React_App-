import React from "react";
import styles from './Profile.module.css'

const Profile = () => {
    return (
        <div className={styles.content}>
            <div>
                <img src="https://www.w3schools.com/w3css/img_forest.jpg" alt=""/>
            </div>
            <div>
                ava + desc
            </div>
            <div>
                My posts
                <div>
                    New posts
                </div>
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Profile;