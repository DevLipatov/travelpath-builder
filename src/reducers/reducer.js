const initialState = {
    categories: ["All"],
    shownCategory: "All",
    pathList: [],
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
        case 'ADD_TO_PATH' :
            const itemIndex = state.pathList.findIndex((el) => el.id === action.payload);
            if (itemIndex >= 0) {
                return {...state}
            } else {
                const newItemInPath = state.shortInfo.find((el) => el.id === action.payload);
                return {
                    ...state,
                    pathList: [
                        ...state.pathList,
                        newItemInPath
                    ]
                }
            }
        case 'DELETE_FROM_PATH' :
            let newPathList = [];
            state.pathList.map((el) => {
                if (el.id !== action.payload) {
                    newPathList.push(el)
                }
                return undefined;
            });
            return {
                ...state,
                pathList : newPathList
            };
        default:
            return state;
    }
};

export default reducer;