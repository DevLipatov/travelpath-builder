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
    loading: null,
    shortInfo: [],
    shortInfoLoading: true,

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
        case 'FETCH_SHORT_INFO_SUCCESS' :
            return {...state, shortInfo: action.payload, shortInfoLoading: false};

        default:
            return state;
    }
};

export default reducer;