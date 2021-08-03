const ADD_MESS = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESS: {
            let newMessage = {
                id: 6,
                message: state.newMessageText,
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            break;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            state.newMessageText = action.newText;
            break;
        }
    }

    return state;
}

export const addMessActionCreator = () => ({ type: ADD_MESS });
export const updateNewMessageText = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText:text })


export default dialogsReducer;