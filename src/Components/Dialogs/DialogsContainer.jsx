import Dialogs from "./Dialogs";
import {
    sendMessageCreator,
    updateNewMessageBodyCreator,
} from "../../Redux/dialogsReducer";

const DialogsContainer = props => {
    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };
    let onNewMessageChange = body => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    };

    return (
        <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state}
        />
    );
};

export default DialogsContainer;
