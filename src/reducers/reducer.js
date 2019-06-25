const initialState = {
    categories: [
        "All",
        "Cathedrals and churches",
        "Museums",
        "Bars",
        "Food",
        "Clubs",
        "Markets",
        "Hotels"
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
    ]
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ALL_CATEGORIES' :
            return {
                categories: action.categories
            };
        case 'CHANGE_CATEGORY' :
            return {
                shownCategory: action.category
            };
        default:
            return state;
    }
};

export default reducer;