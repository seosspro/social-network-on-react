import MM from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./MessageItem/Message";

const Dialogs = props => {
    let dialogsElements = props.dialogs.map(dialog => (
        <DialogItem name={dialog.name} id={dialog.id} />
    ));

    let messagesElements = props.messages.map(message => (
        <Message name={message.message} id={message.id} />
    ));

    return (
        <div>
            <div className={MM.dialogs}>
                <div className={MM.dialogsItems}>{dialogsElements}</div>
                <div className={MM.messages}>{messagesElements}</div>
            </div>
        </div>
    );
};

export default Dialogs;
