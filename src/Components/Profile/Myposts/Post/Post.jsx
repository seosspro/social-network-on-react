import mp from "./MyPosts.module.css";

const Post = props => {
    return (
        <div className={mp.posts__post}>
            <img
                className={mp.posts__avatar}
                src='https://kogdavyydet.ru/wp-content/uploads/2017/01/avatar_5526.jpg'
            ></img>
            {props.message}
            <button className={mp.posts__like}>Мне нравится</button>{" "}
            {props.likesCount}
        </div>
    );
};

export default Post;
