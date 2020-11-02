const ADDD_MESSAGE = 'ADDD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

export let addMessageActionCreated = () => {
    return {type: 'ADDD_MESSAGE'}
}

export let updateNewMessageTextActionCreated = (text) => {
    return {type: 'UPDATE_NEW_MESSAGE_TEXT', newMessage: text}
}

let initialState = {
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
    NewMessageText: 'Yoooohoooooo!!'
}

const messageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADDD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.NewMessageText,
                id_user: 1
            };

            state.messagesData.push(newMessage);
            state.NewMessageText = "";
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.NewMessageText = action.newMessage;
            return state;
        default:
            return state;
    }
}
export default messageReducer;