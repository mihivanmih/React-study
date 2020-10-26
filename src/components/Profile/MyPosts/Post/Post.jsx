import React from "react";
import s from './Post.module.css';


const Post = (props) => {

    return (
       <div className={s.item}>
           <img src="https://i1.rgstatic.net/ii/profile.image/613571104886784-1523298159009_Q512/Mohamed_Emara19.jpg" className={s.ava} alt=""/>
           {props.massage} <span>like {props.like} </span>
       </div>
    )

}

export default Post