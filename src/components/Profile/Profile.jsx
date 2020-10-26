import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {

    return (
        <main>
            <div className={s.main__top}>
                <img className={s.main__fon} src="https://travel247.ru/media/k2/items/cache/6187e8e3b292df4bec7f162543eed86b_L.jpg" alt=""/>
            </div>
            <div className={s.itemBlock}>
                <a href="" className={s.item}>Profle</a>
            </div>
            <div className={s.itemBlock}>
                <a href="" className={s.item}>mESSAGE</a>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </main>
    )

}

export default Profile