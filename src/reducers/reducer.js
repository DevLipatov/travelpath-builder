const initialState = {
    categories: ["All"],
    shownCategory: "All",
    pathList: [
        {
            id: "1",
            title: "Коложская церковь"
        },
        {
            id: "2",
            title: "Старый замок"
        }
    ],
    fullInfo: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_CATEGORY' :
            return {...state, shownCategory: action.payload};
        case 'FULL_INFO_LOADED' :
            return {...state, fullInfo: action.payload};
        case 'CATEGORIES_LOADED' :
            return {...state, categories: action.payload};
        default:
            return state;
    }
};

export default reducer;