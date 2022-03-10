import axios from "axios";
import React, { Fragment } from "react";
import styles from "./Users.module.css";

class Users extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
            )
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = pageNumber => {
        this.props.setCurrentPage(pageNumber);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
            )
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    };

    render() {
        let pagesCount = Math.ceil(
            this.props.totalUsersCount / this.props.pageSize
        );

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div className={styles.userContainer}>
                <div>
                    {pages.map(p => {
                        return (
                            <span
                                onClick={evt => {
                                    this.onPageChanged(p);
                                }}
                                className={
                                    this.props.currentPage === p &&
                                    styles.selectedPage
                                }
                            >
                                {p}
                            </span>
                        );
                    })}
                </div>
                {this.props.users.map(u => {
                    return (
                        <Fragment>
                            <div key={u.id}></div>
                            <span>
                                <div>
                                    <img
                                        src={
                                            u.photos.small != null
                                                ? u.photos.small
                                                : "../../Photo/cf8a11b44a748c4ce286fb020f920ada.png"
                                        }
                                        className={styles.userPhoto}
                                    />
                                </div>
                                <div>
                                    {u.followed ? (
                                        <button
                                            onClick={() => {
                                                this.props.unfollow(u.id);
                                            }}
                                        >
                                            Unfollow
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => {
                                                this.props.follow(u.id);
                                            }}
                                        >
                                            Follow
                                        </button>
                                    )}
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>{u.status}</div>
                                    <div>{u.name}</div>
                                </span>
                                <span>
                                    <div>{"u.location.city"}</div>
                                    <div>{"u.location.country"}</div>
                                </span>
                            </span>
                        </Fragment>
                    );
                })}
            </div>
        );
    }
}

export default Users;
