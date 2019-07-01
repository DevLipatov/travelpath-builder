const categoryChange = (newCategory) => {
    return {
        //TODO rename
        type: 'CHANGE_CATEGORY',
        payload: newCategory
    }
};

const fullInfoLoaded = (fullInfo) => {
    return {
        type: 'FETCH_FULL_INFO_SUCCESS',
        payload: fullInfo
    }
};

const shortInfoLoaded = (shortInfo) => {
    return {
        type: 'FETCH_SHORT_INFO_SUCCESS',
        payload: shortInfo
    }
};

const categoriesLoaded = (categories) => {
    return {
        type: 'FETCH_CATEGORIES_SUCCESS',
        payload: categories
    }
};

const lisOfPlacesLoaded = () => {
    return {
        //TODO rename
        type: 'LIST_OF_PLACES_LOADED'
    }
};

const loadingError = (error) => {
    return {
        type: 'LOADING_FAILURE',
        payload:  error
    }
};

const addToPath = (id) => {
    return {
        type: 'ADD_TO_PATH',
        payload: id
    }

};

const deleteFromPath = (id) => {
    return {
        type: 'DELETE_FROM_PATH',
        payload: id
    }

};

const toggleModalOn = () => {
    return {
        type: 'SHOW_MODAL'
    }
};

const toggleModalOff = () => {
    return {
        type: 'HIDE_MODAL'
    }
};

const setModalContent = (content) => {
    return {
        type: 'SET_MODAL_CONTENT',
        payload: content
    }
};

export {
    categoryChange,
    fullInfoLoaded,
    categoriesLoaded,
    lisOfPlacesLoaded,
    loadingError,
    shortInfoLoaded,
    addToPath,
    deleteFromPath,
    toggleModalOn,
    toggleModalOff,
    setModalContent
};