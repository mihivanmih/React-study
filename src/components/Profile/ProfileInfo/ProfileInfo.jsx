import React from "react";
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {

    return (
        <div>
            <div className={s.main__top}>
                <img className={s.main__fon} src="https://travel247.ru/media/k2/items/cache/6187e8e3b292df4bec7f162543eed86b_L.jpg" alt=""/>
            </div>
            <div className={s.padding}>
                <div className={s.itemBlock}>
                    <a href="" className={s.item}>Profle</a>
                </div>
                <div className={s.itemBlock}>
                    <a href="" className={s.item}>mESSAGE</a>
                </div>
                <div>
                    ava + description
                </div
            ></div>
        </div>
    )

}

export default ProfileInfo