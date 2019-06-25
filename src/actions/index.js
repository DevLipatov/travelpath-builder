const categoryChanged = (newCategory) => {
    return {
        type: 'CATEGORY_CHANGED',
        category: newCategory
    }
};

export {
    categoryChanged
};