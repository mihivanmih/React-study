const ADDD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADDD_MESSAGE = 'ADDD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let store = {
    _state: {
        profilePage: {
            PostsData: [
                {id: 1, message: 'Hi, how are yoy?', likeCount: '20'},
                {id: 2, message: 'Hi, Moskow', likeCount: '21'},
                {id: 3, message: 'Hi, Russia', likeCount: '44'},
                {id: 4, message: 'Hi, Jonny', likeCount: '11'},
                {id: 4, message: 'Hi, Jon', likeCount: '345'},
            ],
            NewPostText: 'it super.com'
        },
        messagesPage: {
            dialogsData: [
                {
                    id: 1,
                    name: 'Dima',
                    avatar: 'https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg'
                },
                {
                    id: 2,
                    name: 'Sveta',
                    avatar: 'https://trikky.ru/wp-content/blogs.dir/1/files/2018/11/03/r2_cs14110.vk_.me_DadfbesJOxs_f864e54a.jpg'
                },
                {
                    id: 3,
                    name: 'Sany',
                    avatar: 'https://thumb.tildacdn.com/tild6533-6564-4537-b637-663435383065/-/resize/420x/-/format/webp/avafon.png'
                },
                {
                    id: 4,
                    name: 'Viktor',
                    avatar: 'https://www.meme-arsenal.com/memes/33b0915267e6cc40327a7a780bb64923.jpg'
                },
                {
                    id: 5,
                    name: 'Valera',
                    avatar: 'https://sovietgames.su/wp-content/uploads/2016/07/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0.jpg'
                },
            ],
            messagesData: [
                {id: 1, message: 'Hi', id_user: '1'},
                {id: 2, message: 'How is you', id_user: '2'},
                {id: 3, message: 'Yo', id_user: '1'},
                {id: 4, message: 'Yo', id_user: '1'},
                {id: 5, message: 'Yo', id_user: '1'},
                {id: 6, message: 'Yo Yo Yo', id_user: '2'},
            ],
            NewMessageText: 'Yoooohoooooo'
        },
        sidebar: {
            leftMenufriends: [
                {
                    id: 1,
                    name: 'Dima',
                    avatar: 'https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg'
                },
                {
                    id: 2,
                    name: 'Sveta',
                    avatar: 'https://trikky.ru/wp-content/blogs.dir/1/files/2018/11/03/r2_cs14110.vk_.me_DadfbesJOxs_f864e54a.jpg'
                },
                {
                    id: 3,
                    name: 'Sany',
                    avatar: 'https://thumb.tildacdn.com/tild6533-6564-4537-b637-663435383065/-/resize/420x/-/format/webp/avafon.png'
                },
            ]
        }
    },
    _renderEntireTree() {
        console.log("rerender");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._renderEntireTree = observer;
    },

    _addPost(likeCount) {
        let newPost = {
            id: 5,
            message: this._state.profilePage.NewPostText,
            likeCount: likeCount
        };

        this._state.profilePage.PostsData.push(newPost);
        // this._state.profilePage.NewPostText  = "";
        this._renderEntireTree(this._state);
    },
    _updateNewPostText(newText) {
        this._state.profilePage.NewPostText = newText;
        this._renderEntireTree(this._state);
    },

    _addMessage() {

        let newMessage = {
            id: 5,
            message: this._state.messagesPage.NewMessageText,
            id_user: 1
        };

        this._state.messagesPage.messagesData.push(newMessage);
        this._state.messagesPage.NewMessageText = "";
        this._renderEntireTree(this._state);
    },
    _updateNewMessageText(newMessage) {
        this._state.messagesPage.NewMessageText = newMessage;
        this._renderEntireTree(this._state);
    },

    dispatch(action) { // { type: 'ADD-POST' }

        if (action.type === ADDD_POST) {
            this._addPost(action.likeCount);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._updateNewPostText(action.newText);
        } else if (action.type === ADDD_MESSAGE) {
            this._addMessage();
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._updateNewMessageText(action.newMessage);
        }

    }
}

export default store;