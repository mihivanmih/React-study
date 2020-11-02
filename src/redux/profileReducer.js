import Message from "../components/Dialogs/Message/Mssage";

const ADDD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}
let rand = getRandomInt(1, 12020)

export let addPostActionCreated = () => {
    return {type: 'ADD-POST', likeCount: rand}
}

export let updateNewPostTextActionCreated = (text) => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText: text}
}

let initialState = {
    PostsData: [
        {id: 1, message: 'Hi, how are yoy?', likeCount: '20'},
        {id: 2, message: 'Hi, Moskow', likeCount: '21'},
        {id: 3, message: 'Hi, Russia', likeCount: '44'},
        {id: 4, message: 'Hi, Jonny', likeCount: '11'},
        {id: 4, message: 'Hi, Jon', likeCount: '345'},
    ],
    NewPostText: 'it super.com'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDD_POST:

            let newPost = {
                id: 5,
                message: state.NewPostText,
                likeCount: action.likeCount
            };
            state.PostsData.push(newPost);
            state.NewPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.NewPostText = action.newText;
            return state;
        default: return state;
    }


}

export default profileReducer;