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

const categoriesLoaded = (categories) => {
    return {
        //TODO rename
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

export {
    categoryChange,
    fullInfoLoaded,
    categoriesLoaded,
    lisOfPlacesLoaded,
    loadingError
};