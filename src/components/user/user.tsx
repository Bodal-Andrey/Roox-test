import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { AppRoute } from '../../const';
import ActionCreator from '../../reducer/actions';

interface Props {
    user: {
        name: string,
        address: {
            city: string,
        }
        company: {
            name: string,
        }
    },
    onDetailClick: (user: object) => void,
};

const User: React.FC<Props> = ({ user, onDetailClick }) => {
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
    onDetailClick(user: object) {
        dispatch(ActionCreator.loadUserDetails(user));
    },
});

export default connect(null, mapDispatchToProps)(User);
