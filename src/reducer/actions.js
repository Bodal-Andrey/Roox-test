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
};

export default ActionCreator;
