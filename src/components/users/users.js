import React from 'react';

const Users = () => {
    return (
        <section className='users'>
            <h2 className='users-title'>Список пользователей</h2>
            <ul className='users-list'>
                <li className='users-list__item list-item'>
                    <div className='list-item__details'>
                        <p>ФИО: <span>Иван Иванов</span></p>
                        <p>город: <span>Москва</span></p>
                        <p>компания: <span>ООО "Пример"</span></p>
                    </div>
                    <a href='#'>Подробнее</a>
                </li>
                <li className='users-list__item list-item'>
                    <div className='list-item__details'>
                        <p>ФИО: <span>Иван Иванов</span></p>
                        <p>город: <span>Москва</span></p>
                        <p>компания: <span>ООО "Пример"</span></p>
                    </div>
                    <a href='#'>Подробнее</a>
                </li>
                <li className='users-list__item list-item'>
                    <div className='list-item__details'>
                        <p>ФИО: <span>Иван Иванов</span></p>
                        <p>город: <span>Москва</span></p>
                        <p>компания: <span>ООО "Пример"</span></p>
                    </div>
                    <a href='#'>Подробнее</a>
                </li>
            </ul>
            <p className='users-count'>Найдено 10 пользователей</p>
        </section>
    );
};

export default Users;
