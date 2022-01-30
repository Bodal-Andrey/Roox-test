const getUsers = (state) => {
    return state.users;
};

const getLoadStatus = (state) => {
    return state.loadStatus;
};

export {
    getUsers,
    getLoadStatus,
};
