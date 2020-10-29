import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let PostsElement = props.PostsData.map(post => <Post like={post.likeCount} massage={post.message}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost();
        props.updateNewPostText("");
       // newPostElement.current.value = "";
    }

    let onChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <div className={s.padding}>My posts</div>
            <div className={s.padding}>
                <div>
                    <textarea name="" ref={newPostElement} id="new-post" onChange={onChange} value={props.newPostText}/>
                </div>
                <div className={s.padding_top}>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>

            <div className={s.posts}>

                {PostsElement}

            </div>

        </div>
    )

}

export default MyPosts