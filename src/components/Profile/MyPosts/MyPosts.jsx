import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {

    return (
       <div>
           My posts
           <div>
               <textarea name="" id="" cols="30" rows="10"></textarea>
               <button>Add post</button>
           </div>

           <div className={s.posts}>

               <Post like="20" massage="Hi, how are yoy?"/>
               <Post like="21" massage="Hi, Moskow"/>
               <Post like="44" massage="Hi, Russia"/>
               <Post like="02"  massage="Hi, Jonny"/>

           </div>

       </div>
    )

}

export default MyPosts