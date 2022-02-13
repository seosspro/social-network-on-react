import Post from "./Myposts/Post/Post";
import MyPostsContainer from "./Myposts/Post/MyPostsContainer";

const Profile = props => {
    return (
        <div>
            <MyPostsContainer store={props.store} />
            <Post />
        </div>
    );
};

export default Profile;
