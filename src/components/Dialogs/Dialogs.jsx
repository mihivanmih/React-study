import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>

            <div className={s.dialogs__tems}>
                <div className={s.dialogs_item}>
                   <NavLink className={s.item} activeClassName={s.active} to="/dialogs/1">Dima</NavLink>
                </div>
                <div className={`${s.dialogs_item} ${s.active}`}>
                    <NavLink className={s.item} activeClassName={s.active} to="/dialogs/2">Sveta</NavLink>
                </div>
                <div className={s.dialogs_item}>
                    <NavLink className={s.item} activeClassName={s.active} to="/dialogs/3">Sany</NavLink>
                </div>
                <div className={s.dialogs_item}>
                    <NavLink className={s.item} activeClassName={s.active} to="/dialogs/4">Viktor</NavLink>
                </div>
                <div className={s.dialogs_item}>
                    <NavLink className={s.item} activeClassName={s.active} to="/dialogs/5">Valera</NavLink>
                </div>
            </div>

            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is you</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs;