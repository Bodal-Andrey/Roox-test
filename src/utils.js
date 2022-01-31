import { SortingTypes } from './const';

const extend = (a, b) => {
    return Object.assign({}, a, b);
};

const SortCity = (x, y) => {
    if (x.address.city < y.address.city) { return -1; }
    if (x.address.city > y.address.city) { return 1; }
    return 0;
};

const SortCompany = (x, y) => {
    if (x.company.name < y.company.name) { return -1; }
    if (x.company.name > y.company.name) { return 1; }
    return 0;
};

const sortingUsers = (users, sortType) => {
    let sortedUsers = [];

    switch (sortType) {
        case SortingTypes.RANDOM:
            sortedUsers = users;
            break;
        case SortingTypes.CITY:
            sortedUsers = users.sort(SortCity);
            break;
        case SortingTypes.COMPANY:
            sortedUsers = users.sort(SortCompany);
            break;
    }

    return sortedUsers;
};

export {
    extend,
    sortingUsers,
};
