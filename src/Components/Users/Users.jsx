import React from "react";
import styles from "./Users.module.css";

let Users = props => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl:
                    "https://www.google.com/search?q=chief+keef&sxsrf=APq-WBvjdQXrJ2VqYP26dR_XDKaGVrhgTw:1645525938355&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiRppjojZP2AhUIzYsKHf9MDp4Q_AUoAXoECAEQAw&biw=2560&bih=1321&dpr=1#imgrc=URs8_xygCtl6nM",
                followed: true,
                fullname: "Серега",
                status: "",
                location: { city: "Krasnoyarsk", country: "Russia" },
            },
            {
                id: 2,
                photoUrl:
                    "https://www.google.com/search?q=chief+keef&sxsrf=APq-WBvjdQXrJ2VqYP26dR_XDKaGVrhgTw:1645525938355&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiRppjojZP2AhUIzYsKHf9MDp4Q_AUoAXoECAEQAw&biw=2560&bih=1321&dpr=1#imgrc=URs8_xygCtl6nM",
                followed: false,
                fullname: "Валера",
                status: "",
                location: { city: "Krasnoyarsk", country: "Russia" },
            },
            {
                id: 3,
                photoUrl:
                    "https://www.google.com/search?q=chief+keef&sxsrf=APq-WBvjdQXrJ2VqYP26dR_XDKaGVrhgTw:1645525938355&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiRppjojZP2AhUIzYsKHf9MDp4Q_AUoAXoECAEQAw&biw=2560&bih=1321&dpr=1#imgrc=URs8_xygCtl6nM",
                followed: false,
                fullname: "Жека",
                status: "",
                location: { city: "Krasnoyarsk", country: "Russia" },
            },
            {
                id: 4,
                photoUrl:
                    "https://www.google.com/search?q=chief+keef&sxsrf=APq-WBvjdQXrJ2VqYP26dR_XDKaGVrhgTw:1645525938355&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiRppjojZP2AhUIzYsKHf9MDp4Q_AUoAXoECAEQAw&biw=2560&bih=1321&dpr=1#imgrc=URs8_xygCtl6nM",
                followed: false,
                fullname: "Андрей",
                status: "",
                location: { city: "Krasnoyarsk", country: "Russia" },
            },
            {
                id: 5,
                photoUrl:
                    "https://www.google.com/search?q=chief+keef&sxsrf=APq-WBvjdQXrJ2VqYP26dR_XDKaGVrhgTw:1645525938355&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiRppjojZP2AhUIzYsKHf9MDp4Q_AUoAXoECAEQAw&biw=2560&bih=1321&dpr=1#imgrc=URs8_xygCtl6nM",
                followed: false,
                fullname: "Макс",
                status: "",
                location: { city: "Krasnoyarsk", country: "Russia" },
            },
            {
                id: 6,
                photoUrl:
                    "https://www.google.com/search?q=chief+keef&sxsrf=APq-WBvjdQXrJ2VqYP26dR_XDKaGVrhgTw:1645525938355&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiRppjojZP2AhUIzYsKHf9MDp4Q_AUoAXoECAEQAw&biw=2560&bih=1321&dpr=1#imgrc=URs8_xygCtl6nM",
                followed: false,
                fullname: "Кристина",
                status: "",
                location: { city: "Irkutsk", country: "Russia" },
            },
        ]);
    }

    return (
        <div>
            {props.users.map(u => {
                return <div key={u.id}></div>;
            })}
            <span>
                <div>
                    <img
                        src={u.photoUrl}
                        alt='avatar'
                        className={styles.userPhoto}
                    />
                </div>
                <div>
                    {u.follow ? (
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
                    <div>{u.fullname}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.city}</div>
                    <div>{u.location.country}</div>
                </span>
            </span>

            <div>{}</div>
        </div>
    );
};

export default Users;
