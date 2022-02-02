interface IUser {
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        city: string,
        zipcode: string,
        },
    phone: string,
    website: string,
};

export {
    IUser,
};
