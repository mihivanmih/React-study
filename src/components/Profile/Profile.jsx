import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <main>
            <ProfileInfo/>
            <MyPosts updateNewPostText={props.updateNewPostText}
                     PostsData={props.state.PostsData}
                     newPostText={props.state.NewPostText}
                     addPost={props.addPost}/>
        </main>
    )

}

export default Profile