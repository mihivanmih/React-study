import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialogs_item}>
            <div className={s.dialogs__avatar}><img src={props.avatar} alt=""/>
            </div>
            <NavLink className={s.item} activeClassName={s.active}
                     to={"/dialogs/" + props.link}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;