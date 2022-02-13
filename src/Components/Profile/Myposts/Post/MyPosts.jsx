import mp from "./MyPosts.module.css";
import Post from "./Post";
import React from "react";

const MyPosts = props => {
    let postsElements = props.posts.map(post => (
        <Post message={post.message} likesCount={post.likesCount} />
    ));

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={mp.posts}>
            {postsElements}
            <textarea
                onChange={onPostChange}
                ref={newPostElement}
                value={props.newPostText}
            ></textarea>
            <button onClick={onAddPost}>add post</button>
        </div>
    );
};

export default MyPosts;
