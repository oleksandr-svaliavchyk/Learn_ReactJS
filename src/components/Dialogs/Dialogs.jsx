import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Avatar from "./Avatar/Avatar";
import {addMessActionCreator, updateNewMessageText} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let dialogsElements =  props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} />  );
    let messagesElements = props.state.messages.map( m => <Message message={m.message}/> );
    let dialogAvatar = props.state.Avatar.map(a => <Avatar avatarLink={a.link} />);

    let newTextElement = React.createRef();

    let addMess = () => {
        props.dispatch(addMessActionCreator());
    }

    let onMessChange = () => {
        let text = newTextElement.current.value;
        props.dispatch(updateNewMessageText(text));
    }
    return (
        <div className={s.dialogs}>
            <div className={s.avatars}>
                {dialogAvatar}
            </div>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea
                    ref={newTextElement}
                    onChange={onMessChange}
                    value= {props.state.newMessageText}
                ></textarea>
                <button onClick={addMess}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;