import React from "react";
import {addMessageActionCreated, updateNewMessageTextActionCreated} from "../../redux/messagesReducer"
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let store = props.store.getState();

    let addMessageContainerName = () => {
        props.store.dispatch(addMessageActionCreated());
    }

    let onChangeContainerName = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreated(text));
    }

    return (
        <Dialogs addMessageContainer={addMessageContainerName}
                 onChangeContainer={onChangeContainerName}
                 state={store.messagesPage}

        />
    )
}

export default DialogsContainer;