import React from 'react';

const HomePage = () => {
    return (
        <main className='main'>
            <h1 className='visually-hidden'>Roox Test</h1>
            <div className='container'>
                <div className='container-wrapper'>
                    <div className='sort'>
                        <h2 className='sort-title'>Сортировка</h2>
                        <button className='sort-city'>по городу</button>
                        <button className='sort-company'>по компании</button>
                    </div>
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
                </div>
            </div>
        </main>
    );
};

export default HomePage;
