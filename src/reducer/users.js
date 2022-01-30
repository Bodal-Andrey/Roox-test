import { extend } from "../utils";
import ActionCreator from "./actions";
import ActionType from "./types";

const initialState = {
    users: [],
    loadStatus: false,
};

const Operation = {
    loadUsers: () => (dispatch, getState, api) => {
        return api.get(`/users`)
            .then((data) => {
                dispatch(ActionCreator.loadUsers(data.data));
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
        default:
            return state;
    }
};

export {
    Operation,
    reducer,
};
