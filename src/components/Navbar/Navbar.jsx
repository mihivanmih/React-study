import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {

    return (
        <section className={s.leftMenu}>
            <NavLink className={s.item} activeClassName={s.active} to="/profile">Profile</NavLink> <br/>
            <NavLink className={s.item} activeClassName={s.active} to="/dialogs">Messages</NavLink><br/>
            <NavLink className={s.item} activeClassName={s.active} to="/news">News</NavLink><br/>
            <NavLink className={s.item} activeClassName={s.active} to="/music">Music</NavLink><br/>
            <NavLink className={s.item} activeClassName={s.active} to="/settings">Settings</NavLink><br/>
        </section>
    )

}

export default NavBar