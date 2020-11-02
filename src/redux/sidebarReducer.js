let initialState = {
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
}
const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;