import React from "react";
import styles from './MyPosts.module.css'
import Post from "./Posts/Post";
const MyPosts = () => {
    return (
            <div >
                My posts
                <div className={styles.MyPostsCover}>
                    <textarea> New Post</textarea>
                    <button> Add Post</button>
                    <button> Remove Post</button>
                </div>
                <div className={styles.MainPostCover}>
                    <Post message= ' Hi, how are you?'  like = '17' />
                    <Post message= 'It is my first post' like = '24' />
                    <Post />
                </div>

            </div>

    );
};

export default MyPosts;