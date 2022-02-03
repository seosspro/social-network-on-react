import MM from "./../Dialogs.module.css";

const Message = props => {
    return <div className={MM.message}>{props.name}</div>;
};

export default Message;
