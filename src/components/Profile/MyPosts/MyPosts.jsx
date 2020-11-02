import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let PostsElement = props.state.PostsData.map(post => <Post like={post.likeCount} massage={post.message}/>);

    let newPostElement = React.createRef();

    let onPost = () => {
        props.addPost();
    }

    let onChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostTextActionCreated(text);
    }

    return (
        <div>
            <div className={s.padding}>My posts</div>
            <div className={s.padding}>
                <div>
                    <textarea name="" ref={newPostElement} id="new-post" onChange={onChange}
                              value={props.state.NewPostText}/>
                </div>
                <div className={s.padding_top}>
                    <button onClick={onPost}>Add post</button>
                </div>
            </div>

            <div className={s.posts}>

                {PostsElement}

            </div>

        </div>
    )

}

export default MyPosts