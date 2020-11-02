import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Mssage";
import {addMessageActionCreated, updateNewMessageTextActionCreated} from "../../redux/messagesReducer"

const Dialogs = (props) => {


    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} link={dialog.id}
                                                                            avatar={dialog.avatar}/>);
    let messagesElements = props.state.messagesData.map(message => <Message message={message.message}/>);
    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessageContainer();
    }

    let onChange = (e) => {
        let text = newMessageElement.current.value;
        props.onChangeContainer(text);
    }


    return (
        <div className={s.dialogs}>

            <div className={s.dialogs__tems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}

                <br/>

                <div>
                    <textarea name="" ref={newMessageElement} onChange={onChange} id="new-post"
                              value={props.state.NewMessageText}></textarea>
                </div>
                <div className={s.padding_top}>
                    <button onClick={addMessage}>Add post</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;