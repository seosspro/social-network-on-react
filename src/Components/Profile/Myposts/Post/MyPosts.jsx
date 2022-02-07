import mp from "./MyPosts.module.css";
import Post from "./Post";
import React from "react";

const MyPosts = props => {
    let postsElements = props.posts.map(post => (
        <Post message={post.message} likesCount={post.likesCount} />
    ));

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({ type: "ADD-POST" });
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({ type: "UPDATE-NEW-POST-TEXT", newText: text });
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
