import React from "react";
import styles from './MyPosts.module.css'
import Post from "./Posts/Post";

const MyPosts = (props) => {


    let postsElements = props.state.postData.map(p => <Post id={p.id} message={p.message} likes={p.likesCounter} />)

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = ''

    } // for button 
    let newPostElement = React.createRef()

    return (
        <div>
            My posts
            <div className={styles.MyPostsCover}>
                <textarea ref={newPostElement} />
                <div>
                    <button onClick={addPost} > Add Post</button>
                </div>
            </div>
            <div className={styles.MainPostCover}>
                {postsElements}
            </div>
        </div>

    );
};

export default MyPosts;