import ActionType from "./types";

const ActionCreator = {
    loadUsers: (data) => ({
        type: ActionType.LOAD_USERS,
        payload: data
    }),
    changeLoadStatus: (loadStatus) => ({
        type: ActionType.CHANGE_LOAD_STATUS,
        payload: loadStatus
    }),
    changeSort: (sortType) => ({
        type: ActionType.CHANGE_SORT,
        payload: sortType
    }),
    loadUserDetails: (data) => ({
        type: ActionType.LOAD_USER_DETAILS,
        payload: data
    }),
    updateUserData: (data) => ({
        type: ActionType.UPDATE_USER_DATA,
        payload: data
    }),
};

export default ActionCreator;
