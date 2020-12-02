import React from "react";
import styles from './Post.module.css'

const Post = (props) => {
    return (

        <div className={styles.item}>
            <div>
                {props.message}
            </div>
            <span>Like {props.likesCountre}</span>
        </div>


    );
};

export default Post;