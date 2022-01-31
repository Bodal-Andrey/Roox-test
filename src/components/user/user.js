import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { AppRoute } from '../../const';
import ActionCreator from '../../reducer/actions';

const User = ({ user, onDetailClick }) => {
    return (
        <li className='users-list__item list-item'>
            <div className='list-item__details'>
                <p>ФИО: <span>{user.name}</span></p>
                <p>город: <span>{user.address.city}</span></p>
                <p>компания: <span>{user.company.name}</span></p>
            </div>
            <Link onClick={() => onDetailClick(user)} to={AppRoute.FORM} href='#'>Подробнее</Link>
        </li>
    );
};

const mapDispatchToProps = (dispatch) => ({
    onDetailClick(user) {
        dispatch(ActionCreator.loadUserDetails(user));
    },
});

export default connect(null, mapDispatchToProps)(User);
