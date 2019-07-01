const initialState = {
    categories: ["All"],
    pathList: [],
    shortInfo: [],
    fullInfo: undefined,
    shownCategory: "All",
    shortInfoLoading: true,
    shortInfoError: null,
    fullInfoLoading: true,
    fullInfoError: null,
    listOfPlacesLoading: true,
    modalShow: false,
    modalContent: undefined
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_CATEGORY' :
            return {...state, shownCategory: action.payload};
        case 'FETCH_SHORT_INFO_SUCCESS' :
            return {...state, shortInfo: action.payload, shortInfoLoading: false};
        case 'FETCH_SHORT_INFO_FAILURE' :
            return {...state, shortInfoLoadingError: action.error, shortInfoError: false};
        case 'FETCH_FULL_INFO_SUCCESS' :
            return {...state, fullInfo: action.payload, listOfPlacesLoading: false};
        case 'FETCH_FULL_INFO_FAILURE' :
            return {...state, fullInfoLoadingError: action.error, listOfPlacesLoading: false};
        case 'FETCH_CATEGORIES_SUCCESS' :
            return {...state, categories: action.payload};
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
            //TODO rewrite
            let newPathList = [];
            state.pathList.map((el) => {
                if (el.id !== action.payload) {
                    newPathList.push(el)
                }
                return undefined;
            });
            return {
                ...state,
                pathList: newPathList
            };
        case 'SHOW_MODAL':
            return {...state, modalShow: true};
        case 'HIDE_MODAL':
            return {...state, modalShow: false};
        case 'SET_MODAL_CONTENT' :
            return {...state, modalContent: action.payload};
        default:
            return state;
    }
};

export default reducer;