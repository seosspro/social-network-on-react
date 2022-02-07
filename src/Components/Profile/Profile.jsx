import MyPosts from "./Myposts/Post/MyPosts";
import Post from "./Myposts/Post/Post";

const Profile = props => {
    return (
        <div>
            <MyPosts
                posts={props.posts}
                newPostText={props.newPostText}
                dispatch={props.dispatch}
            />
            <Post />
        </div>
    );
};

export default Profile;
