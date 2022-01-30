import { createSelector } from "reselect";
import { sortingUsers } from '../utils';

const getUsers = (state) => {
    return state.users;
};

const getLoadStatus = (state) => {
    return state.loadStatus;
};

const getSortType = (state) => {
    return state.sortType;
};

const getSortedUsers = createSelector(
    getUsers,
    getSortType,
    (users, sortType) => sortingUsers(users, sortType)
);

export {
    getUsers,
    getLoadStatus,
    getSortedUsers,
    getSortType,
};
