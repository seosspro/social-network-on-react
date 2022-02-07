import mp from "./MyPosts.module.css";
import Post from "./Post";
import React from "react";
import { addPostActionCreator } from "../../../../Redux/State";
import { updateNewPostTextActionCreator } from "../../../../Redux/State";

const MyPosts = props => {
    let postsElements = props.posts.map(post => (
        <Post message={post.message} likesCount={post.likesCount} />
    ));

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    };

    return (
        <>
            <div className={mp.posts}>
                {postsElements}
                <textarea
                    onChange={onPostChange}
                    ref={newPostElement}
                    value={props.newPostText}
                ></textarea>
                <button onClick={addPost}>add post</button>
            </div>
        </>
    );
};

export default MyPosts;
