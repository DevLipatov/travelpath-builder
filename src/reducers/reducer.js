const initialState = {
    categories: [
        "All",
        "Cathedrals and churches",
        "Museums",
        "Bars",
        "Food",
        "Clubs",
        "Markets",
        "Hotels",
        "Parks"
    ],
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
            return {
                categories: state.categories,
                shownCategory: action.payload,
                pathList: state.pathList,
                fullInfo: state.fullInfo
            };
        case 'FULL_INFO_LOADED' :
            return {
                categories: state.categories,
                shownCategory: state.shownCategory,
                pathList: state.pathList,
                fullInfo: action.payload
            };
        default:
            return state;
    }
};

export default reducer;