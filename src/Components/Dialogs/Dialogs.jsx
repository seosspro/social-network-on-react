import MM from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./MessageItem/Message";
import {
    sendMessageCreator,
    updateNewMessageBodyCreator,
} from "../../Redux/dialogsReducer";

const Dialogs = props => {
    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => (
        <DialogItem name={dialog.name} id={dialog.id} />
    ));
    let messagesElements = state.messages.map(message => (
        <Message name={message.message} id={message.id} />
    ));
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };
    let onNewMessageChange = e => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
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
