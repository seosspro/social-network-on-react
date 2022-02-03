import MM from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = props => {
    return (
        <div
            className={DialogData =>
                DialogData.isActive ? MM.active : MM.dialogItem
            }
        >
            <NavLink to={"/Dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;
