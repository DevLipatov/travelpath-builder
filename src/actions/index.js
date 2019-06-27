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

export {
    categoryChange,
    fullInfoLoaded
};