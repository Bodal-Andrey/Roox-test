import * as React from 'react';
import User from '../user';

interface Props {
    users: [
        user: {
            id: number
        }
    ],
};

const UsersList: React.FC<Props> = ({ users }) => {
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
            <p className='users-count'>Найдено {users.length} пользователей</p>
        </section>
    );
};

export default UsersList;
