import React from 'react';
import User from '../user';

const UsersList = ({ users }) => {
    return (
        <section className='users'>
            <h2 className='users-title'>Список пользователей</h2>
            <ul className='users-list'>
                {users.map((user) =>
                    <User
                        user={user}
                        key={user.id}
                    />
                )}
            </ul>
            <p className='users-count'>Найдено 10 пользователей</p>
        </section>
    );
};

export default UsersList;
