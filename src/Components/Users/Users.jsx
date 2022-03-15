import React, { Fragment } from 'react';
import styles from './Users.module.css';

let Users = props => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

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
                                props.onPageChanged(p);
                            }}
                            className={
                                props.currentPage === p && styles.selectedPage
                            }
                        >
                            {p}
                        </span>
                    );
                })}
            </div>
            {props.users.map(u => {
                return (
                    <Fragment>
                        <div key={u.id}></div>
                        <span>
                            <div>
                                <img
                                    src={
                                        u.photos.small != null
                                            ? u.photos.small
                                            : '../../Photo/cf8a11b44a748c4ce286fb020f920ada.png'
                                    }
                                    className={styles.userPhoto}
                                />
                            </div>
                            <div>
                                {u.followed ? (
                                    <button
                                        onClick={() => {
                                            props.unfollow(u.id);
                                        }}
                                    >
                                        Unfollow
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => {
                                            props.follow(u.id);
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
                                <div>{'u.location.city'}</div>
                                <div>{'u.location.country'}</div>
                            </span>
                        </span>
                    </Fragment>
                );
            })}
        </div>
    );
};

export default Users;
