const categoryChange = (newCategory) => {
    return {
        type: 'CHANGE_CATEGORY',
        payload: newCategory
    }
};

const fullInfoLoaded = (fullInfo) => {
    return {
        type: 'FULL_INFO_LOADED',
        payload: fullInfo
    }
};

const categoriesLoaded = (categories) => {
    return {
        type: 'CATEGORIES_LOADED',
        payload: categories
    }
};

export {
    categoryChange,
    fullInfoLoaded,
    categoriesLoaded
};