import React from 'react';
import { Link } from "react-router-dom";
import { AppRoute } from '../../const';

const User = ({ user }) => {
    return (
        <li className='users-list__item list-item'>
            <div className='list-item__details'>
                <p>ФИО: <span>{user.name}</span></p>
                <p>город: <span>{user.address.city}</span></p>
                <p>компания: <span>{user.company.name}</span></p>
            </div>
            <Link to={AppRoute.FORM} href='#'>Подробнее</Link>
        </li>
    );
};

export default User;
