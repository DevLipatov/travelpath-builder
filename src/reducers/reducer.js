const initialState = {
    categories: ["All"],
    pathList: [],
    shortInfo: [],
    fullInfo: [],
    shownCategory: "All",
    shortInfoLoading: true,
    shortInfoError: null,
    fullInfoLoading: true,
    fullInfoError: null,
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
            return {...state, shortInfoError: action.error};
        case 'FETCH_FULL_INFO_SUCCESS' :
            return {...state, fullInfo: action.payload, fullInfoLoading: false};
        case 'FETCH_FULL_INFO_FAILURE' :
            return {...state, fullInfoError: action.error, fullInfoLoading: true};
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
        case 'TOGGLE_MODAL_ON':
            return {...state, modalShow: true};
        case 'TOGGLE_MODAL_OFF':
            return {...state, modalShow: false, fullInfo:[], fullInfoLoading: true};
        case 'SET_MODAL_CONTENT' :
            return {...state, modalContent: action.payload};
        default:
            return state;
    }
};

export default reducer;