import NameSpace from "./name-space";

const getUsers = (state) => {
    return state[NameSpace.USERS].users;
};

const getLoadStatus = (state) => {
    return state[NameSpace.USERS].loadStatus;
};

export {
    getUsers,
    getLoadStatus,
};
