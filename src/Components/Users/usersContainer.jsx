import { connect } from "react-redux";
import Users from "./Users";
import { followAC, unfollowAC, setUsersAC } from "./../../Redux/usersReducer";

const mapStateToProps = state => {
    return state.users.users;
};

const mapDispatchToProps = dispatch => {
    return {
        follow: userId => {
            dispatch(followAC(userId));
        },
        unfollow: userId => {
            dispatch(unfollowAC(userId));
        },
        setUsers: users => {
            dispatch(setUsersAC(users));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
