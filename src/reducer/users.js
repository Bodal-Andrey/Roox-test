import { extend } from "../utils";
import ActionCreator from "./actions";
import ActionType from "./types";
import { SortingTypes } from '../const';

const initialState = {
    users: [],
    loadStatus: false,
    sortType: SortingTypes.RANDOM,
    userDetails: {},
};

const Operation = {
    loadUsers: () => (dispatch, getState, api) => {
        return api.get(`/users`)
            .then((data) => {
                dispatch(ActionCreator.loadUsers(data.data));
                dispatch(ActionCreator.changeSort(SortingTypes.RANDOM));
                dispatch(ActionCreator.changeLoadStatus(true));
            });
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LOAD_USERS:
            return extend(state, { users: action.payload });
        case ActionType.CHANGE_LOAD_STATUS:
            return extend(state, { loadStatus: action.payload });
        case ActionType.CHANGE_SORT:
            return extend(state, { sortType: action.payload });
        case ActionType.LOAD_USER_DETAILS:
            return extend(state, { userDetails: action.payload });
        default:
            return state;
    }
};

export {
    Operation,
    reducer,
};
