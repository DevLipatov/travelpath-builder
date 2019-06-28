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
    fullInfo: [],
    listOfPlacesLoading: true,
    loading: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_CATEGORY' :
            return {...state, shownCategory: action.payload};
        case 'FETCH_FULL_INFO_SUCCESS' :
            return {...state, fullInfo: action.payload, listOfPlacesLoading: false};
        case 'FETCH_CATEGORIES_SUCCESS' :
            return {...state, categories: action.payload};
        case 'LOADING_FAILURE' :
            return {...state, loading: action.error, listOfPlacesLoading: false};
        default:
            return state;
    }
};

export default reducer;