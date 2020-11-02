import React from "react";
import {addPostActionCreated, updateNewPostTextActionCreated} from "../../../redux/profileReducer"
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreated());
    }

    let updateNewPostTextContainer = (text) => {
        props.store.dispatch( updateNewPostTextActionCreated(text));
    }

    return (
        <MyPosts addPost={addPost}
                 state={state.profilePage}
                 posts={props.posts}
                 updateNewPostTextActionCreated={updateNewPostTextContainer}
                 newPostText={state.profilePage.newPostText}
        />
    )
}

export default MyPostsContainer