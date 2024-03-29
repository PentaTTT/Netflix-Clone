// Fetch movie
export const getListsStart = () => ({
    type: "GET_LISTS_START"
});
export const getListsSuccess = (lists) => ({
    type: "GET_LISTS_SUCCESS",
    payload: lists
});
export const getListsFailed = () => ({
    type: "GET_LISTS_FAILED"
});

// Delete movie
export const deleteListStart = () => ({
    type: "DELETE_LIST_START"
});
export const deleteListSuccess = (id) => ({
    type: "DELETE_LIST_SUCCESS",
    payload: id
});
export const deleteListFailed = () => ({
    type: "DELETE_LIST_FAILED"
});

// Create movie
export const createListStart = () => ({
    type: "CREATE_LIST_START"
});
export const createListSuccess = (movie) => ({
    type: "CREATE_LIST_SUCCESS",
    payload: movie
});
export const createListFailed = () => ({
    type: "CREATE_LIST_FAILED"
});

// Update movie
export const updateListStart = () => ({
    type: "UPDATE_LIST_START"
});
export const updateListSuccess = (movie) => ({
    type: "UPDATE_LIST_SUCCESS",
    payload: movie
});
export const updateListFailed = () => ({
    type: "UPDATE_LIST_FAILED"
});