import MM from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./MessageItem/Message";

const Dialogs = props => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => (
        <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
    ));
    let messagesElements = state.messages.map(message => (
        <Message name={message.message} key={message.id} id={message.id} />
    ));
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    };
    let onNewMessageChange = e => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };

    return (
        <div>
            <div className={MM.dialogs}>
                <div className={MM.dialogsItems}>{dialogsElements}</div>
                <div className={MM.messages}>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            value={newMessageBody}
                            onChange={onNewMessageChange}
                            placeholder='enter ur message'
                        ></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
