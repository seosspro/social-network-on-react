const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        { id: '1', message: 'Хай' },
        { id: '2', message: 'Ку' },
        { id: '3', message: '-_-' },
        { id: '4', message: '-.-' },
        { id: '5', message: 'чо' },
    ],

    dialogs: [
        { id: '1', name: 'Серега' },
        { id: '2', name: 'Валера' },
        { id: '3', name: 'Жека' },
        { id: '4', name: 'Андрей' },
        { id: '5', name: 'Макс' },
    ],
    newMessageBody: '',
};

const dialogsReducer = (state = initialState, action) => {
    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        return {
            ...state,
            newMessageBody: action.body,
        };
    } else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody;
        return {
            ...state,
            newMessageBody: '',
            messages: [...state.messages, { id: 6, message: body }],
        };
    }

    return state;
};

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE,
});
export const updateNewMessageBodyCreator = body => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
});

export default dialogsReducer;
