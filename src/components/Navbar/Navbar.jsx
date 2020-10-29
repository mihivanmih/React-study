import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "../Dialogs/DialogItem/DialogItem";


const FriendItem = (props) => {
    return (
        <div className={s.dialogs_item}>
            <div className={s.dialogs__avatar}>
                <img src={ props.avatar } alt=""/>
            </div>
            <NavLink className={s.item} activeClassName={s.active} to={"/dialogs/"+props.link}>{props.name}</NavLink>
        </div>
    )
}

const NavBar = (props) => {

    let leftMenufriendsElement = props.state.leftMenufriends.map( dialog =>  <FriendItem name={dialog.name} link={dialog.id} avatar={dialog.avatar}/>);

    return (
        <section className={s.leftMenu}>
            <NavLink className={s.item} activeClassName={s.active} to="/profile">Profile</NavLink> <br/>
            <NavLink className={s.item} activeClassName={s.active} to="/dialogs">Dialogs</NavLink><br/>
            <NavLink className={s.item} activeClassName={s.active} to="/news">News</NavLink><br/>
            <NavLink className={s.item} activeClassName={s.active} to="/music">Music</NavLink><br/>
            <NavLink className={s.item} activeClassName={s.active} to="/settings">Settings</NavLink><br/>


            <div className={s.avatar__block}>
                { leftMenufriendsElement }
            </div>

        </section>
    )

}

export default NavBar